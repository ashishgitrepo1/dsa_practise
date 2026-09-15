var unequalTriplets = function(nums) {
    let n = nums.length;
    let count = 0;
    let dict = {};
    for (let i=0; i<=n-3; i++)
    {
        for (let j=i+1; j<=n-2; j++)
        {
            for (let k=j+1; k<=n-1; k++)
            {
                if ((nums[i]!=nums[j]) && (nums[i]!=nums[k]) && (nums[j]!=nums[k]))
                {
                    //if (!([i,j,k] in dict))
                    //{
                    //    dict[[i,j,k]] = 1;
                        count++;
                    //}
                }
            }
        }
    }
    //return Object.keys(dict).length;
    return count;
};

let nums = [126,606,402,464,199,324,258,927,476,520,195,604,347,469,609,752,160,2,277,606,804,408,275,771,727,372,819,454,328,806,589,19,774,639,435,7,448,905,544,211,102,256,512,53,197,706,376,319,541,24,172,421,339,244,752,955,590,607,91,542,183,429,13,294,748,338,131,16,499,421,519,757,788,30,247,225,306,333,123,96,686,355,486,685,60,812,498,718,309,819,858,213,977,735,537,373,493,36,342,701];
let output = unequalTriplets(nums);
console.log(output);