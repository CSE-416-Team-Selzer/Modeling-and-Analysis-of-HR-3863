population = 0
politicalNames = []
ethnicNames = []

politicalNumbers = []
ethnicNumbers = []

print("\n\nType 'stop' to stop queries. You cannot stop population queries. Type the corresponding values for each group. The last one will autofill based on total population.\n")
print("Population:", end=" ")
population = int(input())
stop = False
while(not stop):
    print('Political Party Name:', end=" ")
    query = str(input())
    if(query.lower() == "stop"):
        stop = True
    else:
        politicalNames.append(query)
stop = False
while(not stop):
    print('Ethnicity Name:', end=" ")
    query = str(input())
    if(query.lower() == "stop"):
        stop = True
    else:
        ethnicNames.append(query)

for x in range(len(politicalNames)-1):
    print(politicalNames[x], "Population:", end=" ")
    politicalNumbers.append(int(input()))
sum = 0
for x in politicalNumbers:
    sum += x
politicalNumbers.append(population-sum)

for x in range(len(ethnicNames)-1):
    print(ethnicNames[x], "Population:", end=" ")
    ethnicNumbers.append(int(input()))
sum = 0
for x in ethnicNumbers:
    sum += x
ethnicNumbers.append(population-sum)

print("Total Seats:", end=" ")
seats = int(input())
politicalSeats = []
ethnicSeats = []
for x in range(len(politicalNames)-1):
    print(politicalNames[x], "Seats:", end=" ")
    politicalSeats.append(int(input()))
sum = 0
for x in politicalSeats:
    sum += x
politicalSeats.append(seats-sum)

for x in range(len(ethnicNames)-1):
    print(ethnicNames[x], "Seats:", end=" ")
    ethnicSeats.append(int(input()))
sum = 0
for x in ethnicSeats:
    sum += x
ethnicSeats.append(seats-sum)

politicalFairnesses = []
ethnicFairnesses = []
print("")
print("Given a population of people with ethnic and political distributions, the general equation for fairness are:\nfairnessFigure = numberOfGroup/totalPop / seatShare/totalSeats\nif fairnessFigure > 1, fairnessFigure = 1/fairnessFigure\noverallFairness = the sum of all numberOfGroup * fairnessFigure divided by totalPop\n")

totPolFair = 0
totEthFair = 0

for x in range(len(politicalNames)):
    if(politicalSeats[x] != 0):
        figure = (politicalNumbers[x]/population) / (politicalSeats[x]/seats)
    else:
        figure = 0
    if(figure > 1):
        figure = 1/figure
    figure *= 100
    politicalFairnesses.append(figure)
    totPolFair += figure*politicalNumbers[x]
totPolFair /= population
for x in range(len(ethnicNames)):
    if(ethnicSeats[x] != 0):
        figure = (ethnicNumbers[x]/population) / (ethnicSeats[x]/seats)
    else:
        figure = 0
    if(figure > 1):
        figure = 1/figure
    figure *= 100
    ethnicFairnesses.append(figure)
    totEthFair += figure*ethnicNumbers[x]
totEthFair /= population

print("Population:", population)
print("================")
for x in range(len(politicalNames)):
    print(politicalNames[x], ":", politicalNumbers[x])
print("================")
for x in range(len(ethnicNames)):
    print(ethnicNames[x],":",ethnicNumbers[x])
print("================")
print("Total Seats:", seats)
print("================")
for x in range(len(politicalNames)):
    print(politicalNames[x], ":", politicalSeats[x])
print("================")
for x in range(len(ethnicNames)):
    print(ethnicNames[x],":",ethnicSeats[x])
print("================")
print("Overall Political Fairness:", totPolFair,"%")
for x in range(len(politicalNames)):
    print(politicalNames[x], "Fairness:", politicalFairnesses[x], "%")
print("================")
print("Overall Ethnic Fairness:", totEthFair, "%")
for x in range(len(ethnicNames)):
    print(ethnicNames[x], "Fairness:", ethnicFairnesses[x], "%")
print("================")    
print("Overall Fairness:", ((totEthFair+totPolFair)/2),"%")
