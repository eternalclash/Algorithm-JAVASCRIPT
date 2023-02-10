function solution(maps) {
    var answer = [];
    const directions = [[0,1],[1,0],[0,-1],[-1,0]];
    let t = [];
    maps= maps.map((e)=>{ return e.split("")})
    function BFS(q,count) { 
    while (q.length > 0) {
        const [x,y] = q.shift()
    for (direction of directions) {
        dx = x + direction[0]
        dy = y + direction[1]
        if (0<=dx&&dx<maps.length&&0<=dy&&dy<maps[0].length&&maps[dx][dy]!='X') {
            count +=Number(maps[dx][dy])
            maps[dx][dy] = 'X'
            q.push([dx,dy])
        }
    }    
    }
    return count
}
    for (let i =0; i<maps.length ;i++)
        { 
        for (let j = 0; j<maps[0].length; j++)
            {
                if(maps[i][j] !='X') {
                    t.push([i,j])
                    let count = Number(maps[i][j]);
                    maps[i][j]='X'
                    answer.push(BFS(t,count))
                }
            }
        }
    answer.sort((a,b)=>a-b)
    return answer;
}
console.log(solution(["X591X","X1X5X","X231X", "1XXX1"]))
// 메리는 여름을 맞아 무인도로 여행을 가기 위해 지도를 보고 있습니다. 
// 지도에는 바다와 무인도들에 대한 정보가 표시돼 있습니다. 지도는 1 x 1크기의 사각형들로 이루어진 직사각형 격자 형태이며, 격자의 각 칸에는 'X' 또는 1에서 9 사이의 자연수가 적혀있습니다. 지도의 'X'는 바다를 나타내며, 숫자는 무인도를 나타냅니다. 이때, 상, 하, 좌, 우로 연결되는 땅들은 하나의 무인도를 이룹니다. 지도의 각 칸에 적힌 숫자는 식량을 나타내는데, 상, 하, 좌, 우로 연결되는 칸에 적힌 숫자를 모두 합한 값은 해당 무인도에서 최대 며칠동안 머물 수 있는지를 나타냅니다. 어떤 섬으로 놀러 갈지 못 정한 메리는 우선 각 섬에서 최대 며칠씩 머물 수 있는지 알아본 후 놀러갈 섬을 결정하려 합니다.

// 지도를 나타내는 문자열 배열 maps가 매개변수로 주어질 때, 각 섬에서 최대 며칠씩 머무를 수 있는지 배열에 오름차순으로 담아 return 하는 solution 함수를 완성해주세요. 만약 지낼 수 있는 무인도가 없다면 -1을 배열에 담아 return 해주세요.
// 오랜만에 DFS BFS js로 큐 만드는 것부터 다시 시작해야겠다 map 메소드는 항상 선언문과 함께해야 하는 거 잊지말자