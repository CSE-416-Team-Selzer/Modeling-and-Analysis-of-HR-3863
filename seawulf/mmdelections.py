import json
import random
import copy

with open('./mmd_ensemble_Arizona.json') as f:
    mmd_plans = json.load(f)

with open('./arizona.json') as f:
    precincts = json.load(f)

election_results = {}

for plan in mmd_plans:
    print(plan, flush=True)
    election_results[plan] = {}
    for mmd_key in mmd_plans[plan]:
        election_results[plan][mmd_key] = {}
        mmd = mmd_plans[plan][mmd_key]
        required_num_winners = mmd["size"]
        demVotes = 0
        repVotes = 0
        caucPop = 0
        totalPop = 0
        for node in mmd["nodes"]:
            demVotes += precincts[str(node)]["demVotes"]
            repVotes += precincts[str(node)]["repVotes"]
            caucPop += precincts[str(node)]["caucasianPop"]
            totalPop += precincts[str(node)]["totalPop"]
        minorityPop = totalPop - caucPop
        estMinRep = round(required_num_winners * (minorityPop / totalPop))
        election_results[plan][mmd_key]["numMinorityReps"] = estMinRep

        threshold = (demVotes+repVotes)/(1+required_num_winners)
        candidates = {}
        for i in range(1,required_num_winners+1):
            dem_name = "democrat_" + str(i)
            rep_name = "republican_" + str(i)
            candidates[dem_name] = 0
            candidates[rep_name] = 0
        winners = {}
        losers = {}
        redistributed = {}
        ballots = []
        for i in range(0, demVotes):
            ballot = []
            dem_picks = []
            rep_picks = []
            for j in range(1,required_num_winners+1):
                dem_pick = "democrat_" + str(j)
                rep_pick = "republican_" + str(j)
                dem_picks.append(dem_pick)
                rep_picks.append(rep_pick)
            while len(dem_picks) > 0:
                pick = dem_picks.pop(random.randrange(len(dem_picks)))
                ballot.append(pick)
            while len(rep_picks) > 0:
                pick = rep_picks.pop(random.randrange(len(rep_picks)))
                ballot.append(pick)
            ballots.append(ballot)
            candidates[ballot[0]] += 1
        for i in range(0, repVotes):
            ballot = []
            dem_picks = []
            rep_picks = []
            for j in range(1,required_num_winners+1):
                dem_pick = "democrat_" + str(j)
                rep_pick = "republican_" + str(j)
                dem_picks.append(dem_pick)
                rep_picks.append(rep_pick)
            while len(rep_picks) > 0:
                pick = rep_picks.pop(random.randrange(len(rep_picks)))
                ballot.append(pick)
            while len(dem_picks) > 0:
                pick = dem_picks.pop(random.randrange(len(dem_picks)))
                ballot.append(pick)
            ballots.append(ballot)
            candidates[ballot[0]] += 1
        cands_copy = copy.deepcopy(candidates)

        tabulation_complete = False
        while tabulation_complete is False: #all remaining rounds
            meet_threshold = 0
            cands_todelete = []
            for c in candidates:
                if candidates[c] > threshold:
                    meet_threshold += 1
                    winners[c] = candidates[c]
                    redistributed[c] = False
                    cands_todelete.append(c)
            for delcand in cands_todelete:
                del candidates[delcand]
            if len(winners) >= required_num_winners:
                tabulation_complete = True
                break
            if len(winners) + len(candidates) > required_num_winners:
                if meet_threshold > 0:
                    for winner in winners:
                        if redistributed[winner] == False:
                            #REDISTRIBUTE VOTES
                            for ballot in ballots:
                                if ballot[0] == winner:
                                    for other_cand in range(1,len(ballot)):
                                        if ballot[other_cand] in candidates:
                                            candidates[ballot[other_cand]] += 1
                                            break
                            redistributed[winner] = True
                else:
                    c_elim = -1
                    lowest_votes = -1
                    for c in candidates:
                        if (c_elim == -1):
                            c_elim = c
                            lowest_votes = candidates[c]
                        else:
                            if candidates[c] < lowest_votes:
                                c_elim = c
                                lowest_votes = candidates[c]
                    losers[c_elim] = lowest_votes
                    del candidates[c_elim]
                    
                    #REDISTRIBUTE VOTES
                    for ballot in ballots:
                        if ballot[0] == c_elim:
                            for other_cand in range(1,len(ballot)):
                                if ballot[other_cand] in candidates:
                                    candidates[ballot[other_cand]] += 1
                                    break
            else:
                for c in candidates:
                    winners[c] = candidates[c]
                    tabulation_complete = True
        
        winnersList = []
        losersList = []
        realWs = []
        realLs = []
        for w in winners:
            winnersList.append(w)
        for l in losers:
            losersList.append(l)
        for l in losersList:
            realLs.append([l, cands_copy[l]])
        winnersList.sort(reverse=True, key=lambda x: winners[x])
        correction = 0
        for w in winnersList:
            if correction < required_num_winners:
                realWs.append([w, cands_copy[w]])
                correction += 1
            else:
                realLs.append([w, cands_copy[w]])
        election_results[plan][mmd_key]["winners"] = realWs
        election_results[plan][mmd_key]["losers"] = realLs

with open('mmd_elections_Arizona.json', 'w') as f:
    json.dump(election_results, f)
