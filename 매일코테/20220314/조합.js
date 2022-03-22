//맨날 까먹네 정신 좀 차리자

function combination(arr, n) {
    let answer = []
    if (n == 1) return arr.map((e) => [e]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index+1)
        const combi = combination(rest, n - 1)
        const attached = combi.map((e, idx) => 
        [fixed,...e]
        )
        answer.push(...attached)
    })

 
    return answer;
}

console.log(combination([1,2,3,4],3))