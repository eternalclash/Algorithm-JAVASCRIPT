import sys
import heapq

n = int(input())
heap = []

for _ in range(n):
    num = int(sys.stdin.readline())
    if num != 0:
        heapq.heappush(heap,(-num))
    else:
        try:
            print(-1 * heapq.heappop(heap))
        except:
            print(0)
#0을 입력을 받으면 배열에서 가장 큰 값을 출력
#heapq(최소 힙)사용 방법
#heapq.heappush(heap,(-num))
#heapq.heappop(heap)