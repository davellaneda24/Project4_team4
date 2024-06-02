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
sports_bet_model = joblib.load("Modeling/sports_bet_model.pkl")
scaler = joblib.load("Modeling/scaler.pkl")

################################################
# Database Setup
################################################

# Connect to PostgreSQL: username, password, host, and port
engine = create_engine("postgresql://postgres:postgres@localhost:5432/nba_db")


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
        f"/api/v1.0/predict/<home_name>/<visitor_name>/<over_under><br/>"
        
            )
    
@app.route('/api/v1.0/predict/<home_name>/<visitor_name>/<over_under>', methods=['GET'])
def predict(home_name, visitor_name, over_under):
  
    session = Session(engine)
    

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
        'over_under': over_under,
        'total_score': total_score,
        'home_name_Atlanta Hawks': 0, 
        'home_name_Boston Celtics': 0,
       'home_name_Brooklyn Nets': 0, 
       'home_name_Charlotte Hornets': 0,
       'home_name_Chicago Bulls': 0,
       'home_name_Cleveland Cavaliers': 0,
       'home_name_Dallas Mavericks': 0,
       'home_name_Denver Nuggets': 0,
       'home_name_Detroit Pistons': 0,
       'home_name_Golden State Warriors': 0,
       'home_name_Houston Rockets': 0,
       'home_name_Indiana Pacers': 0,
       'home_name_LA Clippers': 0, 
       'home_name_Los Angeles Lakers': 0,
       'home_name_Memphis Grizzlies': 0, 
       'home_name_Miami Heat': 0,
       'home_name_Milwaukee Bucks': 0,
       'home_name_Minnesota Timberwolves': 0,
       'home_name_New Orleans Pelicans': 0,
       'home_name_New York Knicks': 0,
       'home_name_Oklahoma City Thunder': 0,
       'home_name_Orlando Magic': 0,
       'home_name_Philadelphia 76ers': 0,
       'home_name_Phoenix Suns': 0,
       'home_name_Portland Trail Blazers': 0,
       'home_name_Sacramento Kings': 0,
       'home_name_San Antonio Spurs': 0,
       'home_name_Toronto Raptors': 0,
       'home_name_Utah Jazz': 0,
       'home_name_Washington Wizards': 0,
       'visitor_name_Atlanta Hawks': 0, 
       'visitor_name_Boston Celtics': 0,
       'visitor_name_Brooklyn Nets': 0, 
       'visitor_name_Charlotte Hornets': 0,
       'visitor_name_Chicago Bulls': 0, 
       'visitor_name_Cleveland Cavaliers': 0,
       'visitor_name_Dallas Mavericks': 0, 
       'visitor_name_Denver Nuggets': 0,
       'visitor_name_Detroit Pistons': 0, 
       'visitor_name_Golden State Warriors': 0,
       'visitor_name_Houston Rockets': 0, 
       'visitor_name_Indiana Pacers': 0,
       'visitor_name_LA Clippers': 0, 
       'visitor_name_Los Angeles Lakers': 0,
       'visitor_name_Memphis Grizzlies': 0, 
       'visitor_name_Miami Heat': 0,
       'visitor_name_Milwaukee Bucks': 0,
       'visitor_name_Minnesota Timberwolves': 0,
       'visitor_name_New Orleans Pelicans': 0,
       'visitor_name_New York Knicks': 0,
       'visitor_name_Oklahoma City Thunder': 0, 
       'visitor_name_Orlando Magic': 0,
       'visitor_name_Philadelphia 76ers': 0, 
       'visitor_name_Phoenix Suns': 0,
       'visitor_name_Portland Trail Blazers': 0,
       'visitor_name_Sacramento Kings': 0,
       'visitor_name_San Antonio Spurs': 0,
       'visitor_name_Toronto Raptors': 0,
       'visitor_name_Utah Jazz': 0, 
       'visitor_name_Washington Wizards': 0
     }
    
    # Set the correct teams to 1
    numeric_features[f'home_name_{home_name}'] = 1
    numeric_features[f'visitor_name_{visitor_name}'] = 1


    df = pd.DataFrame([numeric_features])
    
    # Create the input data using the user inputs
    input_data = df
    
    # Scale the input data
    input_data_scaled = scaler.transform(input_data)

    # Make a prediction
    prediction = sports_bet_model.predict(input_data_scaled)

    return jsonify({'prediction': int(prediction[0])})

    
if __name__ == '__main__':
    app.run(debug=True)
