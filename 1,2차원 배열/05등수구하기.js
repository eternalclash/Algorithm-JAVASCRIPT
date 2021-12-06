function solution(a) {
    let answer=Array.from({length:a.length}, ()=>1);
    for (let i=0 ;i<5;i++)   
        for(let j=0 ; j<5;j++)
            if(a[i]<a[j])
                answer[i]+=1
  return answer;
}
console.log(solution([87,89,92,100,76]))