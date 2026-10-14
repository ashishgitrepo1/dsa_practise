/**
 * @param {string} s
 * @param {character} x
 * @param {character} y
 * @return {string}
 */
var rearrangeString = function(s, x, y) {
    if (x > y)
    {
        return s.split('').sort().join('');
    }
    else if (x < y)
    {
        return s.split('').sort().reverse().join('');
    }
};

let s = "aabc";
let x = "a";
let y = "c";

let output = rearrangeString(s, x, y);
console.log(output);

