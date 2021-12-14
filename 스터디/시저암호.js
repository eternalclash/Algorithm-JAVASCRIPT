function solution(s, n) {
 
      s=s.split("")

      for(let i=0;i<s.length;i++)
      {   if(s[i]==' ')
          {
              s[i]=' '
              continue;
          }
          if(n+s[i].charCodeAt()<=90)
          s[i]=String.fromCharCode(n+s[i].charCodeAt())
          else if(n+s[i].charCodeAt()<=115&&s[i].charCodeAt()<=90)
          {s[i]=String.fromCharCode(n+s[i].charCodeAt()-26)
          console.log(s[i])
          }
          else if(n+s[i].charCodeAt()<=122)
          {
          s[i]=String.fromCharCode(n+s[i].charCodeAt())
          console.log(s[i])
          }
          else
          s[i]=String.fromCharCode(n+s[i].charCodeAt()-26)
      }
     return s=s.join("")
   

}

console.log(solution("a B z",4))