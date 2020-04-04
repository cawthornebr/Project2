from scipy import stats
import numpy as np
import pandas as pd
import datetime as dt
from datetime import datetime
from dateutil.relativedelta import relativedelta
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, inspect, func
from flask import Flask, jsonify, redirect, render_template

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///project1_db.db")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(engine, reflect=True)
db_324 = Base.classes.db324
db_325 = Base.classes.db325
db_326 = Base.classes.db326
db_327 = Base.classes.db327
db_328 = Base.classes.db328
db_329 = Base.classes.db329
db_330 = Base.classes.db330
db_331 = Base.classes.db331
db_401 = Base.classes.db401
db_402 = Base.classes.db402
db_403 = Base.classes.db403
session = Session(engine)
#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    print("----------------------")
    print("index")
    print("----------------------")
    # Create our session (link) from Python to the DB
    # session = Session(engine)

    # Query all confirmed cases, one for each day
    master_list = []
    master_list.append(list(session.query(db_324.Confirmed).filter(db_324.Province_State == "Arizona")))
    master_list.append(list(session.query(db_325.Confirmed).filter(db_325.Province_State == "Arizona")))
    master_list.append(list(session.query(db_326.Confirmed).filter(db_326.Province_State == "Arizona")))
    master_list.append(list(session.query(db_327.Confirmed).filter(db_327.Province_State == "Arizona")))
    master_list.append(list(session.query(db_328.Confirmed).filter(db_328.Province_State == "Arizona")))
    master_list.append(list(session.query(db_329.Confirmed).filter(db_329.Province_State == "Arizona")))
    master_list.append(list(session.query(db_330.Confirmed).filter(db_330.Province_State == "Arizona")))
    master_list.append(list(session.query(db_331.Confirmed).filter(db_331.Province_State == "Arizona")))
    master_list.append(list(session.query(db_401.Confirmed).filter(db_401.Province_State == "Arizona")))
    master_list.append(list(session.query(db_402.Confirmed).filter(db_402.Province_State == "Arizona")))
    master_list.append(list(session.query(db_403.Confirmed).filter(db_403.Province_State == "Arizona")))

    county_list = list(session.query(db_403.Admin2).filter(db_403.Province_State == "Arizona"))
    # county_list
    # print (results)
    session.close()

    return jsonify(master_list)

if __name__ == '__main__':
    app.run(debug=True)