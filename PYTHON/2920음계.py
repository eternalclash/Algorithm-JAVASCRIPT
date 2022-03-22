a = list(map(int,input().split(' ')))
descending = True
ascending = True
for i in range(len(a)-1):
    if(a[i]>a[i+1]): ascending=False
    elif(a[i]<a[i+1]): descending= False

if(ascending) : print("ascending")
elif(descending) : print("descending")
else : print("mixed")