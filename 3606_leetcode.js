/**
 * @param {string[]} code
 * @param {string[]} businessLine
 * @param {boolean[]} isActive
 * @return {string[]}
 */
var validateCoupons = function(code, businessLine, isActive) {
    let n = code.length;
    const strictRegexLong = /^[a-zA-Z0-9_]+$/;
    let codes = [];
    let electronics = [];
    let grocery = [];
    let pharmacy = [];
    let restaurant = [];

    let output = [];



    for (let i=0; i<n; i++)
    {
        if (code[i].length > 0 && strictRegexLong.test(code[i]))
        {
            if (businessLine[i]=='restaurant' || businessLine[i]=='grocery' || businessLine[i]=='pharmacy' || businessLine[i]=='electronics')
            {
                if (isActive[i] == true)
                {
                    console.log(code[i], businessLine[i]);
                    codes.push([code[i], businessLine[i]]);
                }
            }

        }
    }

    for (let code of codes)
    {
        let [newNode, newBusiness] = code;
        if (newBusiness == 'electronics')
        {
            electronics.push(newNode);
        }
        else if (newBusiness == 'grocery')
        {
            grocery.push(newNode);
        }
        else if (newBusiness == 'pharmacy')
        {
            pharmacy.push(newNode);
        }
        else if (newBusiness == 'restaurant')
        {
            restaurant.push(newNode);
        }
    }
    electronics.sort();
    grocery.sort();
    pharmacy.sort();
    restaurant.sort();

    for (let item of electronics)
    {
        output.push(item);
    }
    for (let item of grocery)
    {
        output.push(item);
    }
    for (let item of pharmacy)
    {
        output.push(item);
    }
    for (let item of restaurant)
    {
        output.push(item);
    }
    return output;
    // console.log(codes);
    // return codes.sort();
};

let code = ["1OFw","0MvB"];
let businessLine = ["electronics","pharmacy"];
let isActive = [true,true];

let output = validateCoupons(code, businessLine, isActive);
console.log(output);

