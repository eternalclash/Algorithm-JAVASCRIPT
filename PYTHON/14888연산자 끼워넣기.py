def backTraking(index,sum):
    global minAns
    global maxAns
    if index==N-1:
        if minAns > sum: minAns = sum
        if maxAns < sum: maxAns = sum
        return #인덱스가 N-1 마지막 즉 함수를 종료해야함
    
    for i in range(4): #+,-,%,*
        temp = sum
        if operator[i]==0:continue
        if i==0: sum+=numArr[index+1]
        elif i==1: sum -=numArr[index+1]
        elif i==2: sum *=numArr[index+1]
        else:
            if sum<0 : sum = abs(sum)//numArr[index+1]*-1
            else: sum//=numArr[index+1]
        operator[i] -=1
        backTraking(index+1,sum)
        operator[i] +=1
        sum = temp
N = int(input())  #n을 입력받는다
numArr = list(map(int, input().split())) #수를 입력받는다
operator = list(map(int, input().split())) #연산자를 입력받는다
minAns =float('Inf') #최솟값 설정
maxAns = float('-Inf') #최댓값 설정

backTraking(0,numArr[0]) #인덱스, 수의 첫값 numArr[0]
print(maxAns) #maxAns, minAns 출력
print(minAns)