a = 5
for i in range(a):
    for j in range(a-i-1):
        print(' ', end="")
    for j in range(2*i+1):
        print('*',end="")
    print()