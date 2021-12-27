function solution(s) {
    var answer = '';
    s=s.split(" ")
    console.log(s[0][0].toUpperCase())
    for(let i=0;i<s.length;i++)
    {let str=""
        for(let j=0;j<s[i].length;j++)  
            {  
            if(j%2==0)
            {
                str+=s[i][j].toUpperCase()
                console.log(s[i][j])
            }

            else
                str+= s[i][j]=s[i][j].toLowerCase()
            
        }
            s[i]=str;
        }
            answer =s.join(" ")
    return answer;
}
console.log(solution("try hello world"))