var coinChange = function(coins, amount) {
    if (amount == 0)
    {
        return 0;
    }
    let dp = [];
    for (let i=0; i<=amount; i++)
    {
        dp[i] = -1;
    }
    dp[0] = [];
    //console.log(dp);
    for (let i=0; i<=amount; i++)
    {
        if (dp[i] != -1)
        {
            for (let coin of coins)
            {
                let arr = [...dp[i],coin];
                if (i+coin<=amount && dp[i+coin] == -1)
                {
                    dp[i+coin] = [...arr];
                }
                else if(i+coin<=amount && dp[i+coin]!=-1 && arr.length<dp[i+coin].length)
                {
                    dp[i+coin] = [...arr];
                }
            }
        }
    }
    if (dp[amount] == -1)
    {
        return -1;
    }
    else
    {
        return dp[amount].length;
    }
};
let coins = [370,417,408,156,143,434,168,83,177,280,117];
let amount = 9953;
let result = coinChange(coins,amount);
console.log(result);