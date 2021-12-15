//DFS,BFS오랜만이다 녀석들 (Depth-First Search)
//dfs 루트노드에서 시작해서 다음 분기로 넘어가기 전에 해당 분기를 완벽하게 탐색
//모든 노드를 방문하고자 하는 경우 

//bfs 너비 우선 탐색 (Breadth-First Search)
//최단거리는 bfs가 유리함

function solution(numbers, target) {
    let answer = 0;
    
    dfs(0, 0);
    
    function dfs(depth, sum) {
        if(depth === numbers.length) {
            if (sum === target) {
                answer++;
             }
            return;
        }
        
        dfs(depth + 1, sum + numbers[depth]);
        dfs(depth + 1, sum - numbers[depth]);
    }
    
    return answer;
}


