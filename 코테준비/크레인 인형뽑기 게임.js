function solution(board, moves) {
    var answer = 0;
    let arr= [];
    let word=""
    for(let i=0;i<moves.length;i++)
    {
        let a= board[moves[i]-1].pop()
        if(a==0)
        {
            continue;
        }
      
        arr.push(a)
    }

    console.log(arr)
    for(let j=0; j<arr.length;j++)
    {
        
        if(word!==arr[j])
        {
            word=arr[j]
        }
        else
        {
            answer+=2;
        }
    }
    return answer;
}
console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]],[1,5,3,5,1,2,1,4]))

//board가 0번쨰부터 순서대로 세로로 들어가는 건 줄 알았는데 가로였음,,,,,,,


function solution(board, moves) {
    let result = 0;
    let temp = 0;
    let basket = [];
    
    for(let i = 0; i < moves.length; i++) {
        for(let j = 0; j < board.length; j++) {            
            if(board[j][moves[i]-1] !== 0) {
                if (temp === board[j][moves[i]-1]) {
                    result += 2;
                    if(basket.length > 0) {   
                        basket.pop();
                        temp = basket[basket.length-1];
                    } else {
                        temp = 0;
                    }
                } else {
                    basket.push(board[j][moves[i]-1]);
                    temp = board[j][moves[i]-1];
                }
                board[j][moves[i]-1] = 0;
                break;
            }
        }
    }

    return result;
}
//  하나 더 1번 크레인이 뒤에서부터 0이라도 인형이 하나라도 있으면 들어가야했네 그 생각을 못함
//  이중 반복문으로 board[j][moves[i]-1]에 빼는 느낌으로 해야겠다. 
