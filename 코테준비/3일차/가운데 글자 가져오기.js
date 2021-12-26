function solution(s) {
    var answer = '';
    let arr=s.split('')
    if(arr.length%2==0)
    {
        answer=arr[arr.length/2-1]+arr[arr.length/2]
    }
    else
       answer=arr[Math.floor(arr.length/2)]
    return answer;
}