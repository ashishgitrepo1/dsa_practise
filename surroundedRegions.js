var solve = function(board) {
    // return "test";
    let rows = board.length;
    let cols = board[0].length;

    let wasVisited = {};
    for (let i=0; i<rows; i++)
    {
        for (let j=0; j<cols; j++)
        {
            wasVisited[[i,j]] = false;
        }
    }
    // console.log(wasVisited);
    let paths = [];
    for (let i=1; i<rows-1; i++)
    {
        for (let j=1; j<cols-1; j++)
        {
            if (board[i][j] == 'O' && wasVisited[[i,j]]==false)
            {
                console.log("first row = ",i),
                console.log("first col = ",j);
                let path = [];
                let queue = [[i,j]];
                path.push([i,j]);

                while (queue.length > 0)
                {
                    let [row,col] = queue.shift();
                    wasVisited[[row,col]] = true;

                    let leftRow = row;
                    let leftCol = col-1;
                    // if (leftCol==0 && board[leftRow][leftCol]=="O")
                    // {
                    //     path = [];
                    //     queue = [];
                    //     break;
                    // }
                    if (leftRow>0 && leftRow<rows-1 && leftCol>0 && leftCol<cols-1 && board[leftRow][leftCol]=="O" && wasVisited[[leftRow,leftCol]]==false)
                    {
                        wasVisited[[leftRow,leftCol]] = true;
                        queue.push([leftRow,leftCol]);
                        path.push([leftRow,leftCol]);
                    }

                    let rightRow = row;
                    let rightCol = col+1;
                    // if (rightCol==cols-1 && board[rightRow][rightCol]=="O")
                    // {
                    //     path = [];
                    //     queue = [];
                    //     break;

                    // }
                    if (rightRow>0 && rightRow<rows-1 && rightCol>0 && rightCol<cols-1 && board[rightRow][rightCol]=="O" && wasVisited[[rightRow,rightCol]]==false)
                    {
                        wasVisited[[rightRow,rightCol]] = true;
                        queue.push([rightRow,rightCol]);
                        path.push([rightRow,rightCol]);
                    }

                    let topRow = row-1;
                    let topCol = col;
                    // if (topRow==0 && board[topRow][topCol]=="O")
                    // {
                    //     path = [];
                    //     queue = [];
                    //     break;
                    // }
                    if (topRow>0 && topRow<rows-1 && topCol>0 && topCol<cols-1 && board[topRow][topCol]=="O" && wasVisited[[topRow,topCol]]==false)
                    {
                        wasVisited[[topRow,topCol]] = true;
                        queue.push([topRow,topCol]);
                        path.push([topRow,topCol]);
                    }

                    let bottomRow = row+1;
                    let bottomCol = col;
                    // if (bottomRow==rows-1 && board[bottomRow][bottomCol]=="O")
                    // {
                    //     path = [];
                    //     queue = [];
                    //     break;
                    // }
                    if (bottomRow>0 && bottomRow<rows-1 && bottomCol>0 && bottomCol<cols-1 && board[bottomRow][bottomCol]=="O" && wasVisited[[bottomRow,bottomCol]]==false)
                    {
                        wasVisited[[bottomRow,bottomCol]] = true;
                        queue.push([bottomRow,bottomCol]);
                        path.push([bottomRow,bottomCol]);
                    }

                    // if ((topRow==0 && board[topRow][topCol]=="O") || (bottomRow==rows-1 && board[bottomRow][bottomCol]=="O") || (leftCol==0 && board[leftRow][leftCol]=="O") || (rightCol==cols-1 && board[rightRow][rightCol]=="O") )
                    // {
                    //     path = [];
                    //     queue = [];
                    // }
                    

                }
                if ((j-1==0 && board[i][j-1]=="O") || (i-1==0 && board[i-1][j]=="O") || (i+1==rows-1 && board[i+1][j]=="O") || (j+1==cols-1 && board[i][j+1]=="O")) 
                {
                    path = [];
                }
                let bool = true;
                if (path.length > 0)
                {
                    for (let item of path)
                    {
                        console.log(item);
                        let [a,b] = item;
                        if (a-1==0 && board[a-1][b]=="O")
                        {
                            bool = false;
                        }
                        if (a+1==rows-1 && board[a+1][b]=="O")
                        {
                            bool = false;
                        }
                        if (b-1==0 && board[a][b-1]=="O")
                        {
                            bool = false;
                        }
                        if (b+1==cols-1 && board[a][b+1]=="O")
                        {
                            bool = false;
                        }

                    }
                    if (bool == true)
                    {
                        paths.push(path);
                    }
                    
                }

            }
            
        }
    }
    for (let item of paths)
    {
        for (let n of item)
        {
            let [a,b] = n;
            board[a][b] = "X";
        }
    }
    // return paths;
    return board;
};

let board = [
    ["O","X","O","O","O","X"],
    ["O","O","X","X","X","O"],
    ["X","X","X","X","X","O"],
    ["O","O","O","O","X","X"],
    ["X","X","O","O","X","O"],
    ["O","O","X","X","X","X"]];


let output = solve(board);
console.log(output);
for (let item of output)
{
    console.log(item);
}

