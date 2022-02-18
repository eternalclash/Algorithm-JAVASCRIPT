
    function d(k)
    {   let check = true;
        let arr = [];
        console.log(k)
        for(let i = 0 ; i<k.length ;i++)
        {
            if(k[i]==k[i+1])
                {
                    i=i+1;
                    check=false;
                 
                    continue;
                    
                }
            arr.push(k[i])
        }
           
        if(check)
            return 0;
        if(arr.length<1)
            return true;

        if (d(arr))
            return 1;
        else
            d(arr)
    }


console.log(d("baabaa"))