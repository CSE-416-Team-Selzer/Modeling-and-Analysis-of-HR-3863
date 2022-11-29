import matplotlib.pyplot as plt
from gerrychain import (GeographicPartition, Partition, Graph, MarkovChain,
                        proposals, updaters, constraints, accept, Election)
from gerrychain.proposals import recom
from functools import partial
import pandas
from gerrychain import (Graph, Election)
import json
"""
graph = Graph()

f = open('./arizona.json')
data = json.load(f)
nodes_array = []

for key in data:
    tup = (int(key), data[key])
    nodes_array.append(tup)

graph.add_nodes_from(nodes_array)
f.close()

f = open('./arizonaEdges.json')
data = json.load(f)

for edge in data:
    graph.add_edge(edge[0], edge[1])

f.close()
"""
graph = Graph.from_file("./arizonaGeo.json")

elections = [
    Election("HOUSE20", {"Democratic": "demVotes", "Republican": "repVotes"})
]

my_updaters = {"population": updaters.Tally("totalPop", alias="population")}
election_updaters = {election.name: election for election in elections}
my_updaters.update(election_updaters) #population & election updaters

initial_partition = GeographicPartition(graph, assignment="district", updaters=my_updaters) #initial partition from current districting plan

ideal_population = sum(initial_partition["population"].values()) / len(initial_partition) #prevent unbalanced district populations in redistricting

proposal = partial(recom,
                   pop_col="totalPop",
                   pop_target=ideal_population,
                   epsilon=0.02,
                   node_repeats=2
                  ) #recom proposal

compactness_bound = constraints.UpperBound(
    lambda p: len(p["cut_edges"]),
    2*len(initial_partition["cut_edges"])
) #maintaining compactness 

chain = MarkovChain(
    proposal=proposal,
    constraints=[
        constraints.within_percent_of_ideal_population(initial_partition, 0.55),
        compactness_bound
    ],
    accept=accept.always_accept,
    initial_state=initial_partition,
    total_steps=10
) #chain w/ constraint of district populations being within 2% of equality

dataframe = pandas.DataFrame(
    sorted(partition["HOUSE20"].percents("Democratic"))
    for partition in chain
) #insert sorted Democratic vote percentages into DataFrame

dataframe.to_json("./smd_ensemble.json") #export to JSON for postprocessing
