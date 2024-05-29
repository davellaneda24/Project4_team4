# Import dependencies
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy import create_engine, inspect, func
import numpy as np
import pandas as pd
import joblib
from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.preprocessing import StandardScaler

# Load the model and scaler
sports_bet_model = joblib.load("sports_bet_model.pkl")
scaler = joblib.load("scaler.pkl")

################################################
# Database Setup
################################################

# Connect to PostgreSQL: username, password, host, and port
engine = create_engine("postgresql://postgres:postgres@localhost:5432/nba_db")
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Reflect an existing database into a new model
Base = automap_base()

# Reflect the tables
Base.prepare(autoload_with=engine)

# Create references to each table in the database
team = Base.classes.team_data
over = Base.classes.over_under

#################################################
# Flask Setup
#################################################

app = Flask(__name__)

# Needed to avoid cross-origin error
CORS(app)

#################################################
# Utility Functions
#################################################

def create_input_data(home_name, visitor_name, over_under, numeric_features):
    # This is a placeholder function. You should implement the logic to create the input data for your model.
    input_data = {
        'home_name': home_name,
        'visitor_name': visitor_name,
        'over_under': over_under
    }
    input_data.update(numeric_features)
    input_df = pd.DataFrame([input_data])
    return input_df

#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    """List all available API routes."""
    return (
        f"Available Routes:<br/>"
        f"/api/v1.0/predict<br/>"
    )

@app.route('/api/v1.0/predict', methods=['POST'])
def predict():
    if not request.is_json:
        return jsonify({'error': 'Unsupported Media Type'}), 415

    data = request.json
    home_name = data.get('home_name')
    visitor_name = data.get('visitor_name')
    over_under = data.get('over_under')

    with SessionLocal() as session:
        try:
            # Query numeric features for the home team
            results = session.query(
                func.avg(team.home_points_game).label('home_points_game'),
                func.avg(team.home_totreb).label('home_avg_rebounds'),
                func.avg(team.home_steals).label('home_avg_steals'),
                func.avg(team.home_assists).label('home_avg_assists'),
                func.avg(team.home_blocks).label('home_avg_blocks')
            ).filter(
                team.home_name == home_name
            ).all()

            home_points_game, home_avg_rebounds, home_avg_steals, home_avg_assists, home_avg_blocks = results[0]

            print(f"Avg Points Per Game: {home_points_game}")
            print(f"Avg Rebounds: {home_avg_rebounds}")
            print(f"Avg Steals: {home_avg_steals}")
            print(f"Avg Assists: {home_avg_assists}")
            print(f"Avg Blocks: {home_avg_blocks}")

            # Query numeric features for the visitor team
            results1 = session.query(
                func.avg(team.visitor_points_game).label('visitor_points_game'),
                func.avg(team.visitor_totreb).label('visitor_avg_rebounds'),
                func.avg(team.visitor_steals).label('visitor_avg_steals'),
                func.avg(team.visitor_assists).label('visitor_avg_assists'),
                func.avg(team.visitor_blocks).label('visitor_avg_blocks')
            ).filter(
                team.visitor_name == visitor_name
            ).all()

            visitor_points_game, visitor_avg_rebounds, visitor_avg_steals, visitor_avg_assists, visitor_avg_blocks = results1[0]

            print(f"Avg Points Per Game: {visitor_points_game}")
            print(f"Avg Rebounds: {visitor_avg_rebounds}")
            print(f"Avg Steals: {visitor_avg_steals}")
            print(f"Avg Assists: {visitor_avg_assists}")
            print(f"Avg Blocks: {visitor_avg_blocks}")

            total_score = home_points_game + visitor_points_game

            numeric_features = {
                'home_points_game': home_points_game,
                'visitor_points_game': visitor_points_game,
                'home_totReb': home_avg_rebounds,
                'visitor_totReb': visitor_avg_rebounds,
                'home_assists': home_avg_assists,
                'visitor_assists': visitor_avg_assists,
                'home_blocks': home_avg_blocks,
                'visitor_blocks': visitor_avg_blocks,
                'total_score': total_score
            }

            # Create the input data using the user inputs
            input_data = create_input_data(home_name, visitor_name, over_under, numeric_features)

            # Scale the input data
            input_data_scaled = scaler.transform(input_data)

            # Make a prediction
            prediction = sports_bet_model.predict(input_data_scaled)

            return jsonify({'prediction': int(prediction[0])})
            

        except Exception as e:
            return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)
