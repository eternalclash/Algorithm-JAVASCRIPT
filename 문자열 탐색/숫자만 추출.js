function solution(s) {
    let answer="";
    for(let x of str){
        if(!isNaN(x)) answer+=x;
    }  
    console.log(answer)
    return parseInt(answer); //parseInt로 integer 전환 0208이런거 208로 바꿈
    
}

let str="g0en2T0s8eSoft";
console.log(solution(str));

