let data = [
   [2 , 6 , 4 , 10 , 13 , 7],
  [5 , 10 , 8 , 12 , 14 , 15],
   ["Homework" , "Presentation" , "Term paper" , "Volleyball practice" , "Biology lecture" , "Hangout"]
];
// for (let d of data)
// {
//     for (let item of d)
//     {
//         console.log(item);
//     }
//     console.log("+++++");
// }
data.sort((a,b) => a[1]-b[1]);
console.log(data);
for (let d of data)
{
    for (let item of d)
    {
        console.log(item);
    }
    console.log("+++++");
}