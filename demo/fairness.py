population = 0
politicalNames = []
ethnicNames = []

politicalNumbers = []
ethnicNumbers = []

print("Type 'stop' to stop queries. You cannot stop population queries. Type the corresponding values for each group. The last one will autofill based on total population.")
print("Population:")
population = int(input())
stop = False
while(not stop):
    print('Political Party Name:')
    query = str(input())
    if(query.lower() == "stop"):
        stop = True
    else:
        politicalNames.append(query)
stop = False
while(not stop):
    print('Ethnicity Name:')
    query = str(input())
    if(query.lower() == "stop"):
        stop = True
    else:
        ethnicNames.append(query)

for x in range(len(politicalNames)-1):
    print(politicalNames[x], "Population:")
    politicalNumbers.append(int(input()))
sum = 0
for x in politicalNumbers:
    sum += x
politicalNumbers.append(population-sum)

for x in range(len(ethnicNames)-1):
    print(ethnicNames[x], "Population:")
    ethnicNumbers.append(int(input()))
sum = 0
for x in ethnicNumbers:
    sum += x
ethnicNumbers.append(population-sum)

print("Population:", population)
for x in range(len(politicalNames)):
    print(politicalNames[x], ":", politicalNumbers[x])
for x in range(len(ethnicNames)):
    print(ethnicNames[x],":",ethnicNumbers[x])

print("Now we'll be covering seat share.")
print("Total Seats:")
seats = int(input())
politicalSeats = []
ethnicSeats = []
for x in range(len(politicalNames)-1):
    print(politicalNames[x], "Seats:")
    politicalSeats.append(int(input()))
sum = 0
for x in politicalSeats:
    sum += x
politicalSeats.append(seats-sum)

for x in range(len(ethnicNames)-1):
    print(ethnicNames[x], "Seats:")
    ethnicSeats.append(int(input()))
sum = 0
for x in ethnicSeats:
    sum += x
ethnicSeats.append(seats-sum)

print("Total Seats:", seats)
for x in range(len(politicalNames)):
    print(politicalNames[x], ":", politicalSeats[x])
for x in range(len(ethnicNames)):
    print(ethnicNames[x],":",ethnicSeats[x])

politicalFairnesses = []
ethnicFairnesses = []

print("Given a population of people with ethnic and political distributions, the general equation for fairness are:\nfairnessFigure = numberOfGroup/totalPop / seatShare/totalSeats\nif fairnessFigure > 1, fairnessFigure = 1/fairnessFigure\noverallFairness = the sum of all numberOfGroup * fairnessFigure divided by totalPop\n")

totPolFair = 0
totEthFair = 0

for x in range(len(politicalNames)):
    figure = (politicalNumbers[x]/population) / (politicalSeats[x]/seats)
    if(figure > 1):
        figure = 1/figure
    figure *= 100
    politicalFairnesses.append(figure)
    totPolFair += figure*politicalNumbers[x]
totPolFair /= population
for x in range(len(ethnicNames)):
    figure = (ethnicNumbers[x]/population) / (ethnicSeats[x]/seats)
    if(figure > 1):
        figure = 1/figure
    figure *= 100
    ethnicFairnesses.append(figure)
    totEthFair += figure*ethnicNumbers[x]
totEthFair /= population

print("Overall Political Fairness:", totPolFair,"%")
for x in range(len(politicalNames)):
    print(politicalNames[x], "Fairness:", politicalFairnesses[x], "%")
    
print("Overall Ethnic Fairness:", totEthFair)
for x in range(len(ethnicNames)):
    print(ethnicNames[x], "Fairness:", ethnicFairnesses[x], "%")

