function solution(x, y, n) {
    let dp = {}
    let data = [x]
    dp[x] = 0
    if (x==y) return 0
    while (data.length) {
        let newData = []
        for (d of data) {
            for (e of [d+n,d*2,d*3]) {
                if (e>y||dp[e]) continue
                if (e==y) return dp[d] + 1
                dp[e] = dp[d] + 1
                newData.push(e)
            }
        }
        data = newData
    }
    return -1
}

//dp 개념을 확실하게 파서 들어가야 할 것 같다 
//그리디를 막 사용하기 보다 더 좋은 방식이 있는지 고민 필수