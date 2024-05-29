-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


-- Create a table
CREATE TABLE team_data (
    _id VARCHAR   NOT NULL,
    _id_game varchar   NOT NULL,
    game_id int   NOT NULL,
    date_start date   NOT NULL,
    visitor_name varchar   NOT NULL,
    visitor_nickname varchar   NOT NULL,
    visitor_code varchar   NOT NULL,
    home_id int   NOT NULL,
    home_name varchar   NOT NULL,
    home_nickname varchar   NOT NULL,
    home_code varchar   NOT NULL,
    visitor_points_game int   NOT NULL,
    home_points_game int   NOT NULL,
    _id_stats varchar   NOT NULL,
    visitor_points_stats int   NOT NULL,
    visitor_fgm int   NOT NULL,
    visitor_fga int   NOT NULL,
    visitor_fgp float   NOT NULL,
    visitor_ftm int   NOT NULL,
    visitor_fta int   NOT NULL,
    visitor_ftp float   NOT NULL,
    visitor_tpm int   NOT NULL,
    visitor_tpa int   NOT NULL,
    visitor_tpp float   NOT NULL,
    visitor_offReb int   NOT NULL,
    visitor_defReb int   NOT NULL,
    visitor_totReb int   NOT NULL,
    visitor_assists int   NOT NULL,
    visitor_pFouls int   NOT NULL,
    visitor_steals int   NOT NULL,
    visitor_turnovers int   NOT NULL,
    visitor_blocks int   NOT NULL,
    visitor_plusMinus int   NOT NULL,
    home_points_stats int   NOT NULL,
    home_fgm int   NOT NULL,
    home_fga int   NOT NULL,
    home_fgp float   NOT NULL,
    home_ftm int   NOT NULL,
    home_fta int   NOT NULL,
    home_ftp float   NOT NULL,
    home_tpm int   NOT NULL,
    home_tpa int   NOT NULL,
    home_tpp float   NOT NULL,
    home_offReb int   NOT NULL,
    home_defReb int   NOT NULL,
    home_totReb int   NOT NULL,
    home_assists int   NOT NULL,
    home_pFouls int   NOT NULL,
    home_steals int   NOT NULL,
    home_turnovers int   NOT NULL,
    home_blocks int   NOT NULL,
    home_plusMinus int   NOT NULL,
    CONSTRAINT pk_team_data PRIMARY KEY (
        _id
     )
);

-- create a table
CREATE TABLE over_under (
    game_id int   NOT NULL,
    _id_game varchar   NOT NULL,
    over_under float   NOT NULL,
    Result varchar   NOT NULL,
    CONSTRAINT pk_over_under PRIMARY KEY (
        _id_game
     )
);


