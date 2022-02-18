function solution(rows, columns, queries) {
    var answer = [];
    let stack = [];
    let arr = Array.from(new Array(rows+1),()=>new Array(columns+1).fill(0))
    //Array.fill,Array.from 생각하고 쓰자
    for(let i = 1 ; i <= rows ; i++)
        {
            for(let j = 1 ; j<=columns; j++)
                arr[i][j]=j+columns*(i-1);
        }
    for(let dot = 0 ; dot<queries.length ; dot++)
        {
            let [x1,y1,x2,y2] = queries[dot];
            
            //상단 라인
            for(y1; y1<y2 ; y1++)
                {
                    stack.push(arr[x1][y1])
                }
            //세로 오른쪽 라인
            for(x1; x1<x2 ; x1++)
                {
                    stack.push(arr[x1][y2])
                }

            x1=queries[dot][0]
            y1=queries[dot][1]
            //하단 라인
            for(y2; y1<y2 ; y2--)
                {
                    stack.push(arr[x2][y2])
            
                }
          
            //왼쪽 라인
            for(x2; x1<x2 ; x2--)
                {
                    stack.push(arr[x2][y1])
                }
        [x1,y1,x2,y2] = queries[dot];
        answer.push(Math.min(...stack));
    
        let pop = stack.pop();
        stack.unshift(pop);
            //상단부터
        for (y1; y1 < y2; y1++)
            arr[x1][y1] = stack.shift();
        
        for (x1; x1 < x2; x1++)
            arr[x1][y2] = stack.shift();
       
        [x1,y1,x2,y2] = queries[dot];
        
        for (y2; y1 < y2; y2--)
            arr[x2][y2] = stack.shift();
    
        for (x2; x1 < x2; x2--)
            arr[x2][y1] = stack.shift();
        
     
        }

    
    console.log(answer)
    return answer;
    
}
solution(6,	6,[[2,2,5,4],[3,3,6,6],[5,1,6,3]])