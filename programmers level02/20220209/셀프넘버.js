let n = 10000;
function selfNumber(n) {
    let s = n;
    let sum = 0;
    while (n > 0) {
        sum += n % 10
        n = Math.floor(n/10)
    }
    return sum+s;
}

let arr = Array.from({ length: n }, n => false)

for (let i = 1; i <= n; i++)
{
    arr[selfNumber(i)] = true;
   
}
for (let i = 1; i <= n; i++)
{  if(arr[i]==false)
   console.log(i)
}
