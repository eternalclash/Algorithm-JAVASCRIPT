def hanoi(num,start,end,mid):
    if num==1:
        print(start,end)
    else :
        hanoi(num-1,start,mid,end)
        print(start,end)
        hanoi(num-1,mid,start,end)
n = int(input())
print(2**n-1)
hanoi(n,1,3,2)