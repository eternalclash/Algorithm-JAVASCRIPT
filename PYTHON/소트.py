n = int(input())
arr = list(map(int,input().split()))
s = int(input())

for i in range(n-1): 
  max= arr[i]
  value = 0
  if s== 0:
      break
  for j in range (i+1, n): #max오른쪽에서 max보다 큰 값을  찾음 x는 오른쪽이랑 max의 인덱스차이
      x=j-i
      if arr[j]>max:
          max= arr[j]
          value = x
      if x >= s :
          break
  if value:
       s -=value
       arr.remove(max)
       arr.insert(i,max)

for x in arr:
    print(x,end=' ')

