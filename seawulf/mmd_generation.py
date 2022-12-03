import geopandas as gpd
import pandas as pd
import json
import math

MAX_DISTRICT_PLANS = 5 #Set to low numbers for testing

# Modify file paths

with open('data/Arizona/ensamble/smd_ensemble_Arizona.json') as json_file: #load smd ensamble
    ensamble_ids = json.load(json_file)
precincts = gpd.read_file('data/Arizona/arizonaGeo.geojson') #load state geojson

def map_to_district(precinct_id, plan_id):
    plan = ensamble_ids[plan_id]
    for district_id in plan:
        if(precinct_id in plan[district_id]):
            return int(district_id)
    return -1

# The below for loop will generate GeoDataFrames of each district plan. They are saved into the ensamble dict. If this takes up too much memory

ensamble = dict()

for plan_id in ensamble_ids:
    district_plan = precincts.copy(deep = True)
    district_plan['district'] = district_plan['index'].apply(lambda id: map_to_district(id, plan_id))
    district_plan.drop(["index", "precinct"], axis = 1, inplace=True)
    district_plan = district_plan.dissolve(by = 'district', aggfunc = 'sum')
    district_plan['id'] = district_plan.index
    ensamble[int(plan_id)] = district_plan
    if(int(plan_id) == MAX_DISTRICT_PLANS):
        break

def add_edge(edges, index1, index2):
    if(index1 < index2):
        edges.add((int(index1),int(index2)))
    if(index1 > index2):
        edges.add((int(index2),int(index1)))

enamble_adjacney = dict()
for plan_index in ensamble:
    district_plan = ensamble[plan_index]
    edges = set()
    for i in district_plan.index:
        touch = district_plan['geometry'].touches(district_plan['geometry'][i])
        plan_subset = district_plan[touch]
        for j in plan_subset.index.values:
            add_edge(edges, i, j)
        enamble_adjacney[plan_index] = edges

print(enamble_adjacney[0])
print(len(enamble_adjacney))