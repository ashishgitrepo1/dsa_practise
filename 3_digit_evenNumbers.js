var findEvenNumbers = function(digits) {
    let hash1 = {};
    let output = [];
    
    for (let item of digits)
    {
        if (item in hash1)
        {
            hash1[item] = hash1[item] + 1;
        }
        else
        {
            hash1[item] = 1;
        }
    }
    console.log("debug hash1 = ",hash1);
    for (let i = 100; i<=999; ++i)
    {
        let num;
        let bool = true;
        let n;

        if (i%2 == 0)
        {
            //output = [];
            num = String(i);
            n = num.length;
            let hash2 = {};
            for (let j = 0; j<n; ++j)
            {
                if (num[j] in hash2)
                {
                    hash2[num[j]] = hash2[num[j]] + 1;
                }
                else
                {
                    hash2[num[j]] = 1;
                }
            }
            console.log("debug hash2 = ", i, hash2);
            for (let item in hash2)
            {
                console.log("debug item = ", item, item in hash1);
                if (! (item in hash1))
                {
                    bool = false;
                    break;
                }
                else if (item in hash1 && hash1[item]<hash2[item])
                {
                    bool = false;
                    break;
                }
                console.log("bool within for loop = ",bool);
            }
            console.log("debug bool = ", bool);
            if (bool == true)
            {
                output.push(i);
            }
        }
    }
    return output;
};

let result = findEvenNumbers([2,1,3,0]);

console.log('result = ',result);