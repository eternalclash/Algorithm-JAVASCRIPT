def get_combinations(arr,n):
    result = []

    if n== 0:
        return [[]] #배열의 덧셈을 할 떄 for문에서 요소를 추출하므로 배열의 요소를 빈배열로 리턴한다
    
    for i in range(0,len(arr)):
        elem = arr[i]
        rest_arr = arr[i+1:]
        left_arr= arr[:i]
        for C in get_combinations(left_arr+rest_arr,n-1):
            print(C)
            result.append([elem]+C)
    
    return result

print(get_combinations([1,2,3,4],2))
