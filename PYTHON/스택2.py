n,k = map(int,input().split())
number = list(input())
count = k
answer = []
for num in number:
   while count > 0 and len(answer) > 0 and answer[-1]<num :
    answer.pop()
    count-=1
   answer.append(num)

print(''.join(answer[:n-k]))