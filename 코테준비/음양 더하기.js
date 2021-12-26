function solution(absolutes, signs) {
    var answer = 123456789;
    for(let i=0;i<absolutes.length;i++)
    {
        if(!signs[i])
        absolutes[i]=absolutes[i]*-1;
    }
    answer=absolutes.reduce((acc,curr)=>acc+curr)
    return answer;
}

//맛있따