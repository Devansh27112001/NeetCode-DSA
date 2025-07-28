const solution_optimal = (bills: Array<number>): boolean => {
  let count5: number = 0;
  let count10: number = 0;
  for (let i = 0; i < bills.length; i++) {
    if (bills[i] === 5) {
      count5++;
    } else if (bills[i] === 10) {
      if (count5 <= 0) {
        return false;
      }
      count5--;
      count10++;
    } else {
      if (count10 > 0 && count5 > 0) {
        count10--;
        count5--;
      } else if (count5 >= 3) {
        count5 -= 3;
      } else {
        return false;
      }
    }
  }
  return true;
};
