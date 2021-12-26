function solution(n, arr1, arr2) {
    var answer = [];
    let first = Array.from({length:n},()=>[])
    let second = Array.from({length:n},()=>[])
    let sum = Array.from({length:n},()=>"")
    for(let i=0 ;i<arr1.length;i++)
    {  
        while(arr1[i] !== 0) {
            first[i].unshift(arr1[i] % 2);
            arr1[i] = Math.floor(arr1[i]/2);
        }
        while(first[i].length<n)
        first[i].unshift(0)
    }
    for(let i=0 ;i<arr2.length;i++)
    {  
        while(arr2[i] !== 0) {
            second[i].unshift(arr2[i] % 2);
            arr2[i] = Math.floor(arr2[i]/2);
        }
        while(second[i].length<n)
        second[i].unshift(0)
    }
    for(let i=0; i<n;i++){
        for(let j=0; j<n;j++)
        {
            if(first[i][j]||second[i][j])
            {
                sum[i]+="#"
            }
            else
            {
              sum[i]+=" "
            }
            
        }
    
    }
      
    console.log(first,second)
    console.log(sum)
    return sum;
}

console.log(solution(5,[9,20,28,18,11],[30,1,21,17,28]))