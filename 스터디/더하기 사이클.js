function solution (a) {
    let cycle=1;
    let copy=(a%10)*10+(Math.floor(a/10)+a%10)%10
    console.log(copy)
    while(a!=copy)
    {  
       cycle++;
       copy=(copy%10)*10+(Math.floor(copy/10)+copy%10)%10
       console.log(copy)
    }
    return cycle;
}
console.log(solution(1))