function solution(N, stages) {
    var answer = [];
    let arr=[];
    let num=0;
    let length=stages.length;
    for(let i=0;i<N;i++)
    {   num=stages.filter((a)=>{return(a==i+1)}).length
        arr.push([num/length,i+1])
        length-=num;
    }
     arr.sort((a,b)=>{return b[0]-a[0]})
    
   arr.forEach((element)=>{
       answer.push(element[1])
   })
    return answer;
}
console.log(solution(5,[2,1,2,6,2,4,3,3]))