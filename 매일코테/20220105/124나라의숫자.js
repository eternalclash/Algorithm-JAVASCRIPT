function solution(n) {
    var answer = '';
    while(n>0)
    {
        switch (n % 3) {
            case 0 : 
                answer="4"+answer;
                n=n/3-1;
                break;
            case 1 :
                answer="1"+answer;
                n=Math.floor(n/3);
                break;
            case 2 :
                answer="2"+answer;
                n=Math.floor(n/3);
                break;
       
        }
    }
    return answer;
}
//switch(조건문) case [조건문 실행 후 나오는 값] : {}
//문자열 연산은 +=하면 뒤에 더해진다는 생각하자