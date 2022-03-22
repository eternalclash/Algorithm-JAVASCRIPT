function solution(relation) {
    let idxArr = Array.from(Array(relation[0].length), (v, i) => i);
    let combinations = [];
    for (let i = 0; i < idxArr.length; i++)
    {
        combinations.push(...getCombination(idxArr,i+1))
    }
    combinations = checkUniqueness(relation, combinations);
    combinations = checkMinimality(combinations);

    return combinations.length;
}

const checkUniqueness = (arr, comb) => {
    const results = [];
    comb.forEach((v1, i1) => {   //조합의 경우의수 (0,1,2,3,[0,1],...)
        let set = new Set();
        arr.forEach((v2, i2) => { //relation 경우의 수
            set.add(v1.map(e => v2[e]).join(','))
        });
        if (set.size == arr.length) results.push(v1);
    })
}