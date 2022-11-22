import json

def generate_patterns(number):
    patterns = []
    if number == 3:
        patterns.append([3])
        return patterns
    elif number == 4:
        patterns.append([4])
        return patterns
    elif number == 5:
        patterns.append([5])
        return patterns
    elif number < 3:
        return -1
    else:
        patterns3 = generate_patterns(number-3)
        patterns4 = generate_patterns(number-4)
        patterns5 = generate_patterns(number-5)
        if patterns3 != -1:
            for i in patterns3:
                i.append(3)
                patterns.append(i)
        if patterns4 != -1:
            for i in patterns4:
                i.append(4)
                patterns.append(i)
        if patterns5 != -1:
            for i in patterns5:
                i.append(5)
                patterns.append(i)
        for pattern in patterns:
            pattern.sort()
        patterns_no_dupes = []
        for pattern in patterns:
            if pattern not in patterns_no_dupes:
                patterns_no_dupes.append(pattern)
        return patterns_no_dupes


mmd_patterns_Arizona = generate_patterns(9)
with open('mmd_patterns_Arizona.json', 'w') as f:
    json.dump(mmd_patterns_Arizona, f)

mmd_patterns_Texas = generate_patterns(38)
with open('mmd_patterns_Texas.json', 'w') as f:
    json.dump(mmd_patterns_Texas, f)

mmd_patterns_Utah = generate_patterns(4)
with open('mmd_patterns_Utah.json', 'w') as f:
    json.dump(mmd_patterns_Utah, f)