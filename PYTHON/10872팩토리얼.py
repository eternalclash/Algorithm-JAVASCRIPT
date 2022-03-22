# a = int(input())

# def factorial(num) :
#     answer=1
#     for i in range(num) :
#         answer*=(i+1)
#     return answer

# print(factorial(a))

a = int(input())

def factorial(n):
    if(n>1): return n * factorial(n-1)
    else:
        return 1
    