/* BASEBALL GAME:

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after applying all the operations.

The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.
*/

const solution_optimal = (operations: Array<string>): number => {
  let res: Array<number> = [];

  for (const operation of operations) {
    if (operation === "+") {
      res.push(res[res.length - 1] + res[res.length - 2]);
    } else if (operation === "C") {
      res.pop();
    } else if (operation === "D") {
      res.push(res[res.length - 1] * 2);
    } else {
      res.push(+operation);
    }
  }
  return res.reduce((acc, curr) => acc + curr, 0);
};

console.log(solution_optimal(["5", "2", "C", "D", "+"]));
