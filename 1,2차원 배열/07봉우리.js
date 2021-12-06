function solution(arr) {
    let answer = 0;
    let dx = [-1,0,1,0]
    let dy = [0,1,0,-1]
   
    for(let i=0 ;i<arr.length;i++)
    {   
        for(let j=0;j<arr.length;j++)
        { 
            let flag=1;
           for(let k=0;k<4;k++)
           {
               let nx= i + dx[k];
               let ny = j + dy[k];
               if(nx>=0&&nx<arr.length&&ny>=0&&ny<arr.length&&arr[i][j]<=arr[nx][ny])
               {
                   flag = 0;
                   break;
               }
           }
           if(flag) answer++
        }
    }
    return answer;
}

let arr=[[5, 3, 7, 2, 3], 
[3, 7, 1, 6, 1],
[7, 2, 5, 3, 4],
[4, 3, 6, 4, 1],
[8, 7, 3, 5, 2]];
console.log(solution(arr));
//봉우리 바깥 쪽 처리 필요없는 값
//봉우리 힌트 dx,dy로 위치이동 
// dx=[-1,0,1,0] , dy=[0,1,0, -1]
// let flag를 통해 flag가 1로 존재하면 answer를 추가하는 형식
// arr[-1][0],arr[5][0]으로 되면 안되니깐 &&연산자를 통해 조건문 구현
//  i값을 dx,dy를 활용해서 바꿔야됌 