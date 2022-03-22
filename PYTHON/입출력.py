# 숫자 한개 받기
num=int(input())

# 숫자 여러개 받기
a, b = map(int, input().split)

# 리스트를 통해 한 줄을 입력받기
num = list(map(int, input().split()))

# 한 줄로 문자열 변수 여러 개를 입력받기
a,b=input().split()

# 문자열 여러 줄을 입력받기
str=[input() for _ in range(3)]
str[0] = ABCDEF, str[1]=BCDEFA, str[2]=CDEFAB

#문자열 여러 줄을 입력받기(정수)
arr = [list(map(int,input())) for _ in range(4)]

#2차원 배열을 입력받기
arr=[list(map(int, input().split())) for _ in range(3)]
