/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
//window.findSolution = function(row, n, board, callback) {
window.findSolution = function(row, n, board, callback) {


  if (row === n) {
    callback();
    return;//iterating through all columns for row
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i); //place piece
      if ( !board.hasAnyQueensConflicts()) {
        findSolution(row + 1, n, board, callback);//no conflicts, move to next row }]using recursion
      }//keep recursing, if no conflict
      board.togglePiece(row, i);//remove piece, will go to next column, same row in next loop
    }

  }
};


window.findNRooksSolution = function(n) {
  var solution = [];
  for (var i = 0; i < n; i++) {
    solution[i] = [];
    for (var j = 0; j < n; j++) {
      if (i === j) {
        solution[i][j] = 1;
      } else {
        solution[i][j] = 0;
      }
    }
  }
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  if (n === 1) {
    solutionCount = 1;
  } else if (n === 2) {
    solutionCount = 2;
  } else {
    for (var i = 0; i < n; i++) {
      solutionCount += countNRooksSolutions(n - 1);
    }
  }

  //console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = [];

  //console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  //instantiation rule in Board.js line 12, for empty board
  var board = new Board({n: n});
  var solutionCount = 0;
  //start from first row
  //findSolution(0, n, board, callback);
  var solution = findSolution(0, n, board, function() {
    solutionCount++;
  });
  //var callback = ;

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};