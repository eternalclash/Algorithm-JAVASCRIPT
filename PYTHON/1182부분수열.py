n,m = map(int,input().split())
arr = list(map(int,input().split())) #숫자로 띄엄 띄엄 있는 리스트 저장방법
answer=0  
def dfs(idx,sum):
    global answer
    if (idx>=n) :
        return
    sum+=arr[idx]
    if sum==m:
        answer+=1
    dfs(idx+1,sum-arr[idx])
    dfs(idx+1,sum)

dfs(0,0)
print(answer)