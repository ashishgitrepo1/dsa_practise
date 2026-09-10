var lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0;

    for (let bill of bills)
    {
        if (bill == 5)
        {
            fives += 1;
        }
        else if (bill == 10)
        {
            if (fives >= 1)
            {
                fives -= 1;
                tens += 1;
            }
            else
            {
                return false;
            }
        }
        else if (bill == 20)
        {
            if (tens>=1 && fives>=1)
            {
                tens -= 1;
                fives -= 1;
            }
            else if (tens==0 && fives>=3)
            {
                fives -= 3;
            }
            else
            {
                return false;
            }
        }
    }
    return true;
        
};
let bills = [5,5,10,10,20];
let output = lemonadeChange(bills);
console.log(output);
