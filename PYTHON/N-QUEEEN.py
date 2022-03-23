from cgitb import reset
from multiprocessing.connection import answer_challenge


def check(x):
    for i in range(x):
        if col[x] == col[i] or abs(col[i]-col[x]) == x-i:
            return False
    return True

def dfs(x):
    global answer
    if x == n:
        answer +=1
        return
    for i in range(n):
        col[x] = i
        if check(x):
            dfs(x+1)
n = int(input())
answer = 0
col = [0]*15

dfs(0)
print(col)
