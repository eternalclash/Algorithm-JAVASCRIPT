function sugar(weight)
{  let sum=0;
    while(weight>0)
    {
        if(weight%5==0)
        {
            weight-=5;
            sum++;
        }
        else if(weight%3==0)
        {
            weight-=3;
            sum++;
        }
        else if(weight>5)
        {
            weight-=5;
            sum++;
        }
        else{
            sum=-1;
            break;
        }
    }

    return sum;
}
console.log(sugar(18))
console.log(sugar(4))
console.log(sugar(6))
console.log(sugar(9))
console.log(sugar(11))
