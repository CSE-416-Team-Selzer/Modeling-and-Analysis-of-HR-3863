import geopandas as gpd
import pandas as pd
import json
import math
import networkx as nx
from itertools import permutations
import random

#MAX_DISTRICT_PLANS = 10 #Set to low numbers for testing

# Modify file paths

with open('./smd_ensemble_Arizona.json') as json_file: #load smd ensemble
    ensemble_ids = json.load(json_file)
precincts = gpd.read_file('./arizonaGeo.geojson') #load state geojson

def map_to_district(precinct_id, plan_id):
    plan = ensemble_ids[plan_id]
    for district_id in plan:
        if(precinct_id in plan[district_id]):
            return int(district_id)
    return -1

# The below for loop will generate GeoDataFrames of each district plan. They are saved into the ensemble dict. If this takes up too much memory

ensemble = dict()

for plan_id in ensemble_ids:
    district_plan = precincts.copy(deep = True)
    district_plan['district'] = district_plan['index'].apply(lambda id: map_to_district(id, plan_id))
    district_plan.drop(["index", "precinct"], axis = 1, inplace=True)
    district_plan = district_plan.dissolve(by = 'district', aggfunc = 'sum')
    district_plan['id'] = district_plan.index
    ensemble[plan_id] = district_plan
#    if(int(plan_id) == MAX_DISTRICT_PLANS):
#        break

def add_edge(edges, index1, index2):
    if(index1 < index2):
        edges.add((int(index1),int(index2)))
    if(index1 > index2):
        edges.add((int(index2),int(index1)))

ensemble_adjacency = dict()
for plan_index in ensemble:
    district_plan = ensemble[plan_index]
    edges = set()
    for i in district_plan.index:
        touch = district_plan['geometry'].touches(district_plan['geometry'][i])
        plan_subset = district_plan[touch]
        for j in plan_subset.index.values:
            add_edge(edges, i, j)
        ensemble_adjacency[plan_index] = edges



def partition_list(lst, partition):
    partitioned = []
    index = 0
    for listlen in partition:
        i = 0
        new_list = []
        while i < listlen:
            new_list.append(lst[index])
            i += 1
            index += 1
        partitioned.append(new_list)
    return partitioned

f = open("./mmd_patterns_Arizona.json")
mmd_patterns = json.load(f)
f.close()

districts = []
for i in range(1,10):
    districts.append(i)

mmds = {}

for key in ensemble_adjacency:
    graph = nx.Graph()
    graph.add_nodes_from(districts)
    for edge in ensemble_adjacency[key]:
        graph.add_edge(edge[0], edge[1])

    districts_copy = districts.copy()
    random.shuffle(districts_copy)
    for permutation in list(permutations(districts_copy)):
        found_pattern = False
        for pattern in mmd_patterns:
            dist_part = partition_list(permutation, pattern)
            all_connected = True
            for subg in dist_part:
                if nx.is_connected(graph.subgraph(subg)) is False:
                    all_connected = False
                    break
            if all_connected is True:
                mmds[key] = dist_part
                found_pattern = True
                break
        if found_pattern is True:
            break
        else:
            mmds[key] = "ERROR"

mmds_with_nodes = {}

for key in mmds:
    if mmds[key] == "ERROR":
        mmds_with_nodes[key] = "ERROR"
        continue
    distn = 1
    mmds_with_nodes[key] = {}
    for mmd in mmds[key]:
        mmds_with_nodes[key][str(distn)] = {}
        mmds_with_nodes[key][str(distn)]["size"] = len(mmd)
        mmds_with_nodes[key][str(distn)]["nodes"] = []
        for smd_dist in mmd:
            mmds_with_nodes[key][str(distn)]["nodes"].extend(ensemble_ids[key][str(smd_dist)])
        distn += 1

with open('mmd_ensemble_Arizona.json', 'w') as f:
    json.dump(mmds_with_nodes, f)