from flask import Flask, jsonify, redirect, render_template
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
db_404 = Base.classes.db404
db_405 = Base.classes.db405
db_406 = Base.classes.db406
db_407 = Base.classes.db407
db_408 = Base.classes.db408
session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Create Lists and Dataframe
#################################################

#List of confirmed cases by date
master_list_confirmed = []
master_list_confirmed.append(list(session.query(db_324.Confirmed).filter(db_324.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_325.Confirmed).filter(db_325.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_326.Confirmed).filter(db_326.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_327.Confirmed).filter(db_327.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_328.Confirmed).filter(db_328.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_329.Confirmed).filter(db_329.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_330.Confirmed).filter(db_330.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_331.Confirmed).filter(db_331.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_401.Confirmed).filter(db_401.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_402.Confirmed).filter(db_402.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_403.Confirmed).filter(db_403.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_404.Confirmed).filter(db_404.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_405.Confirmed).filter(db_405.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_406.Confirmed).filter(db_406.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_407.Confirmed).filter(db_407.Province_State == "Arizona")))
master_list_confirmed.append(list(session.query(db_408.Confirmed).filter(db_408.Province_State == "Arizona")))

#List of death cases by date
master_list_deaths = []
master_list_deaths.append(list(session.query(db_324.Deaths).filter(db_324.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_325.Deaths).filter(db_325.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_326.Deaths).filter(db_326.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_327.Deaths).filter(db_327.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_328.Deaths).filter(db_328.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_329.Deaths).filter(db_329.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_330.Deaths).filter(db_330.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_331.Deaths).filter(db_331.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_401.Deaths).filter(db_401.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_402.Deaths).filter(db_402.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_403.Deaths).filter(db_403.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_404.Deaths).filter(db_404.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_405.Deaths).filter(db_405.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_406.Deaths).filter(db_406.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_407.Deaths).filter(db_407.Province_State == "Arizona")))
master_list_deaths.append(list(session.query(db_408.Deaths).filter(db_408.Province_State == "Arizona")))

#AZ county list - county_list_strip
county_list = list(session.query(db_403.Admin2).filter(db_403.Province_State == "Arizona"))
county_list1 = []
for i in county_list:
    county_list1.append(str(i[-1]))

#Close session
session.close()

#Date list
date_list = ["March_24","March_25","March_26","March_27","March_28","March_29","March_30","March_31","April_1",
             "April_2","April_3","April_4","April_5","April_6","April_7","April_8"]

#DataFrame setup for confirmed cases by county
x=[str(l).strip("(,)") for i in master_list_confirmed for l in i]
n=16
final = [x[i * n:(i + 1) * n] for i in range((len(x) + n - 1) // n )]
dict = {}
count=0
for i in final:
    dict.update({date_list[count]:i})
    count+=1
county_confirmed_df = pd.DataFrame(dict,index = county_list1).drop(["Unassigned"])

#DataFrame setup for confirmed cases by state
az_confirmed_df = county_confirmed_df.astype('int64', copy=False)
az_confirmed_df.loc['Total'] = az_confirmed_df.sum()
az_confirmed_df = pd.DataFrame(az_confirmed_df.loc["Total"])
az_confirmed_df = az_confirmed_df.transpose()
az_confirmed_df

#DataFrame setup for death cases
x=[str(l).strip("(,)") for i in master_list_deaths for l in i]
n=16
final = [x[i * n:(i + 1) * n] for i in range((len(x) + n - 1) // n )]
dict = {}
count=0
for i in final:
    dict.update({date_list[count]:i})
    count+=1
county_deaths_df = pd.DataFrame(dict,index = county_list1).drop(["Unassigned"])

#DataFrame setup for confirmed cases by state
az_deaths_df = county_deaths_df.astype('int64', copy=False)
az_deaths_df.loc['Total'] = az_deaths_df.sum()
az_deaths_df = pd.DataFrame(az_deaths_df.loc["Total"])
az_deaths_df = az_deaths_df.transpose()
az_deaths_df

#DataFrame setup for county lat and lon values
county_list = list(session.query(db_403.Admin2).filter(db_403.Province_State == "Arizona"))
county_lon = list(session.query(db_403.Lat).filter(db_403.Province_State == "Arizona"))
county_lat = list(session.query(db_403.Long_).filter(db_403.Province_State == "Arizona"))
lon_lat = {county_list[i]:[str(county_lon[i]).strip("(,)"), str(county_lat[i]).strip("(,)")] for i in range(len(county_list))}
lon_lat_df = pd.DataFrame(lon_lat).drop(["Unassigned"], axis=1)

#JSONify the dataframe of lat and lon values
json_lat_lon_for_graphing1 = lon_lat_df.to_json(orient='columns')
json_lat_lon_for_graphing2 = lon_lat_df.to_json(orient='index')
json_lat_lon_for_graphing3 = lon_lat_df.to_json(orient='values')

#JSONify the dataframe of confirmed cases by county
json_confirmed_data_for_graphing1 = county_confirmed_df.to_json(orient='columns')
json_confirmed_data_for_graphing2 = county_confirmed_df.to_json(orient='index')
json_confirmed_data_for_graphing3 = county_confirmed_df.to_json(orient='values')

#JSONify the dataframe of confirmed cases by state
json_confirmed_data_for_graphing_state1 = az_confirmed_df.to_json(orient='columns')
json_confirmed_data_for_graphing_state2 = az_confirmed_df.to_json(orient='index')
json_confirmed_data_for_graphing_state3 = az_confirmed_df.to_json(orient='values')

#JSONify the dataframe of confirmed death cases by county
json_deaths_data_for_graphing1 = county_deaths_df.to_json(orient='columns')
json_deaths_data_for_graphing2 = county_deaths_df.to_json(orient='index')
json_deaths_data_for_graphing3 = county_deaths_df.to_json(orient='values')

#JSONify the dataframe of confirmed death cases by state
json_deaths_data_for_graphing_state1 = az_deaths_df.to_json(orient='columns')
json_deaths_data_for_graphing_state2 = az_deaths_df.to_json(orient='index')
json_deaths_data_for_graphing_state3 = az_deaths_df.to_json(orient='values')

#################################################
# Flask Routes
#################################################

@app.route("/")
def index():
    print("----------------------")
    print("index called")
    print("----------------------")
    return render_template('index.html', confirmed=json_confirmed_data_for_graphing_state2)

@app.route("/maps")
def createMap():
    print("----------------------")
    print("map called")
    print("----------------------")
    return render_template('map.html', coordinates=json_lat_lon_for_graphing3, covid=json_confirmed_data_for_graphing2)

@app.route("/bar")
def bar():
    print("----------------------")
    print("bar called")
    print("----------------------")
    return render_template('bar.html', confirmed=json_confirmed_data_for_graphing_state2)

@app.route("/toast")
def toast():
    print("----------------------")
    print("j_code called")
    print("----------------------")
    return render_template('toast.html', confirmed=json_confirmed_data_for_graphing_state2, deaths=json_deaths_data_for_graphing_state2) 

if __name__ == '__main__':
    app.run(debug=True)