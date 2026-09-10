<?php
echo "hello\n";
echo "php";
$arr = ["one", "two", "three"];
array_push($arr,"lichi");
echo count($arr);

$studentNames = [
    ["name"=>"Tushar", "age"=>20],
    ["name"=>"Dost", "age"=>21],
    ["name"=>"Dan", "age"=>22]
];
$totalAge = 0;

foreach($studentNames as $names)
    {
        $totalAge += $names["age"];
    }
// var_dump($totalAge);
// for ($i=0; $i<5; $i++)
//     {
//         var_dump($i);
//     }
$singles = [1, 2, 3, 4, 5];
// print_r(array_keys($singles));
// $doubles = [];

// foreach($singles as $single)
//     {
//         array_push($doubles,$single*2);
//     }
// // var_dump($doubles);
// print_r($doubles);
echo strtoupper("iloveyou\n");
echo max($singles);
echo "\n";
echo min($singles);
echo in_array(100, $singles);

echo $_GET["city"];
class Product
{

}
$product = new Product();
print_r($product);