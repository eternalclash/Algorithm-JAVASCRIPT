a,b=list(map(int,input().split(' ')))
c = 0
blackJack=list(map(int,input().split(' ')))
for i in range(0,a):
    for j in range(i+1, a):
        for k in range(j+1,a):
            if blackJack[i]+blackJack[j]+blackJack[k]<=b:
                c=max(blackJack[i]+blackJack[j]+blackJack[k],c)
           
print(c)