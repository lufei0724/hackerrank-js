const hourglassSum = (arr) => {
  const hourglassArr = [];
  for (let row = 0; row < arr.length - 2; row++) {
    for (let col = 0; col < arr[row].length - 2; col++) {
      const start = { row, col }
      const valueArr = [
          [arr[row][col], arr[row][col+1], arr[row][col+2]],
          [arr[row+1][col+1]],
          [arr[row+2][col], arr[row+2][col+1], arr[row+2][col+2]],
      ]
      const sum = valueArr
       .map(a => a.reduce((total, n) => total + n))
       .reduce((total, n) => total + n)

      hourglassArr.push({ start, valueArr, sum });
    }
  }
  const maxSum = hourglassArr.map(a => a.sum).sort((a, b) => b - a)[0];
  return maxSum;
}

const arr = [
  [1, 1, 1, 0, 0, 0], 
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

console.log(hourglassSum(arr));