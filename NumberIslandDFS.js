//https://leetcode.com/problems/number-of-islands/

var numIslands = function (grid) {

    //edge case if grid length is zero or null
    if (grid == null || grid.length == 0) {
        return 0;
    }
    let nr = grid.length;
    let nc = grid[0].length;
    let numIsland = 0;
    for (let r = 0; r < nr; r++) {
        for (let c = 0; c < nc; c++) {
            if (grid[r][c] == 1) {
                numIsland++;
                dfs(grid, r, c)
            }
        }
    }

    return numIsland;
};

var dfs = function (grid, r, c) {
    // check the r and c are within limit
    let nc = grid[0].length;
    let nr = grid.length;
    if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == 0) {
        return;
    }
    grid[r][c] = 0;
    dfs(grid, r - 1, c);
    dfs(grid, r + 1, c);
    dfs(grid, r, c - 1);
    dfs(grid, r, c + 1);
}


// var numIslands = function(grid) {

//     if(grid == null || grid.lenght == 0)  {
//         return 0;
//     }
//       let nr = grid.length;
//       let nc = grid[0].length;
//       let numIsland = 0;

//       for(let r = 0; r<nr; r++){
//           for(let c =0 ; c<nc; c++){
//               if(grid[r][c] == 1){
//                   numIsland++;
//                   grid[r][c] == 0
//                   let tqueue = [];
//                   tqueue.push(r*nc+c);
//                   while(tqueue.length > 0){
//                       console.log(tqueue.length);
//                       let id = tqueue.shift();                    
//                       let row = Math.floor(id/nc);
//                       let col =  id%nc;
//                       console.log(row, col);
//                       if((row-1) >=0 && grid[row-1][col] == 1){
//                           tqueue.push((row-1)*nc+col);
//                           grid[row-1][col] == 0;
//                       }
//                       else if((row+1) < nr  && grid[row+1][col] == 1){
//                           tqueue.push((row+1)*nc+col);
//                           grid[row+1][col] == 0;
//                       }
//                       else if((col-1) >=0 && grid[row][col-1] == 1){
//                           tqueue.push((row)*nc+col-1);
//                           grid[row][col-1] == 0;
//                       }                   
//                       else if((col+1) < nc  && grid[row][col+1] == 1){
//                           tqueue.push((row)*nc+col+1);
//                           grid[row][col+1] == 0;
//                       }                    
//                   }
//               }
//           }
//       }
//       return numIsland

//   }
