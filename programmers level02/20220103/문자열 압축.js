// let a = "abcdefgh"

// console.log(a.substring(2,2))
// a=a.split("")
// console.log(a.splice(4,2)) //인덱스 4에서 2개를 추출함
//substring은 반대로 해도 문자를 쪼갤 수 있다.

//substring의 성질을 활용해서 풀자
//문자열을 쪼개는데 최대한 문자열을 압축해서 만드는 것
function solution(s) {
    var answer = 0;
    let strings = [s.length];
  
    for(let i = 1 ; i<=parseInt(s.length/2); i++) {
          let cnt=1;
        let string="";
        for(let j = 0 ; j<=s.length ; j+=i)
            {
                const current = s.substring(j,j+i)
                const next = s.substring(j+i,j+2*i)
                if(next===current)
                    {
                        cnt++;
                    }
                else{
                    string= cnt > 1 ? string + cnt + current : string + current
                    cnt = 1;
                }
            }
        strings.push(string.length)
        console.log(string)
    }
    answer = Math.min(...strings)
    return answer;
}

console.log(solution("aabbaccc"))

//문자열을 그대로 문자열로 둘꺼면 배열 push를 하지말고 +연산으로 문자열을 붙이자
//substr(start,length), substring(start,end) 생각하자 제발 