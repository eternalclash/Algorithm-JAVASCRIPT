function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let obj ={};
    let answer =0;
    for(let i = 0 ; i < A.length ; i++)
    {
        if(obj[A[i]])
        {
            if(obj[A[i]]>1)
            obj[A[i]]-=1;
            else
            delete obj[A[i]]
        }
        else
           obj[A[i]]=1;
    }
    answer = Object.keys(obj)
    return Number(answer)
}
