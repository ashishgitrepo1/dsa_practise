<?php
echo "relative rank";
// $arr = [1,2,3,4,5];
function findRelativeRanks($score) {
        // return "hello world";
        $arr = [6,7];
        
        
        foreach($score as $num)
            {
                array_push($arr,$num);
                trickleUp();
            }
        function trickleUp()
        {
            $index = count($arr) - 1;
        }
    }
$score = [5,4,3,2,1];
$output = findRelativeRanks($score);
var_dump($output);