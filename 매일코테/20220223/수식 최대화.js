function solution(expression) {
    const prior = [
        ['-','+','*'],
        ['-','*','+'],
        ['+','*','-'],
        ['+','-','*'],
        ['*','+','-'],
        ['*','-','+']
    ]
    let arr = [];
    for (let p of prior)
        {
            const temp =expression.split(/(\D)/);
            for ( let exp of p)
                {
                    while(temp.includes(exp))
                        {
                            const idx= temp.indexOf(exp)
                            temp.splice(idx-1,3,eval(temp.slice(idx-1,idx+2).join('')))
                        }
                }
            arr.push(Math.abs(temp[0]))
        }
    return Math.max(...arr)
}