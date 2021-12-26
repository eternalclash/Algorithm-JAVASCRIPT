function solution(sizes) {
    var answer = 0;
    let left=0 
    let right=0;
    for(let i=0;i<sizes.length;i++)
        {
            sizes[i]=sizes[i].sort((a,b)=>{return a-b})
            console.log(sizes[i])
            if(left<sizes[i][0])
                left=sizes[i][0]
            if(right<sizes[i][1])
                right=sizes[i][1]
        }
    console.log(left,right)
    answer=left*right
    return answer;
}
console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]))