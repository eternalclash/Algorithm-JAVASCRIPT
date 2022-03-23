from collections import deque
q=deque()
N,M = map(int,input().split())
maze= [list(map(int,input())) for _ in range(N)]
brick = True # 벽 부신 횟수 1이 되면 더이상 사용할 수 없다
maze[0][0]=1
direction = [(1,0),(0,-1),(0,1),(-1,0)]
q.append((0,0))
def bfs() :
    global brick
    while q :
         x,y=q.popleft()
  
         for k in range(len(direction)):
            dx= x + direction[k][0]
            dy= y + direction[k][1]
            if 0<=dx<N and 0<=dy<M :
                if maze[dx][dy]==0:
                    maze[dx][dy]=maze[x][y]+1
                    q.append((dx,dy))
                    # print(maze[dx][dy],"x좌표",dx,"y좌표",dy)
                    bfs()
                elif maze[dx][dy]==1 :
                    if brick:
                        brick=False
                        maze[dx][dy]=maze[x][y]+1
                        q.append((dx,dy))
                        bfs()
                    else :
                        continue
    brick=True

bfs()
print(maze)
if maze[N-1][M-1]:
    print(maze[N-1][M-1])
else:
    print(-1)

    