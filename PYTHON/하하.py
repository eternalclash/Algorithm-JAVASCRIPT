def climbStairs1(k):
    if k==1: return k
    if k==2: return k
    return climbStairs1(k-1) + climbStairs1(k-2)
print(climbStairs1(5))