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
# Create Lists and Dataframe
#################################################

#List of confirmed cases by date
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

#AZ county list - county_list_strip
county_list = list(session.query(db_403.Admin2).filter(db_403.Province_State == "Arizona"))
county_list_1 = []
for i in county_list:
    county_list_1.append(str(i[-1]))

#Close session
session.close()

#Date list
date_list = ["3/24","3/25","3/26","3/27","3/28","3/29","3/30","3/31","4/1","4/2","4/3"]

#DataFrame setup - county_df
x=[str(l).strip("(,)") for i in master_list for l in i]
n=16
final = [x[i * n:(i + 1) * n] for i in range((len(x) + n - 1) // n )]
dict = {}
count=0
for i in final:
    dict.update({date_list[count]:i})
    count+=1
county_df = pd.DataFrame(dict,index = county_list_1)

#JSONify the dataframe
json_data_for_graphing1 = county_df.to_json(orient='columns')
json_data_for_graphing2 = county_df.to_json(orient='index')
json_data_for_graphing3 = county_df.to_json(orient='values')

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    print("----------------------")
    print("index")
    print("----------------------")

if __name__ == '__main__':
    app.run(debug=True)