function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    let arr=[];//이진 수를 담을 배열
    let answer=0;
    let max=0;
    while(N!=0)
    {
       arr.unshift(N%2)
       N=Math.floor(N/2)
    } //이진 수 처리 완료
    for(let i=0 ;i<arr.length;i++)
    {
        if(arr[i]==0)
        {
           answer++;
        }
        else
        {
          if(max<answer)
          max=answer;
          answer=0;
        }
    }
    return max;
}