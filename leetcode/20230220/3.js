var setZeroes = function(matrix) {
    let arr = []
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j]==0) {
                arr.push([i,j])
            }
        }
    }
    for (let a of arr) {
        const [x,y] = a
        for (let i = 0; i<matrix.length; i++) matrix[i][y] = 0
        for (let i = 0; i<matrix[0].length; i++) matrix[x][i] = 0 
    }
    


};

//데이터영역 변수영역 기초적인 javascript 변수 선언 할당에 대해 다시 고찰하자
//2차원 배열의 복사는 map에 slice를 활용하는 것을 알아야 한다