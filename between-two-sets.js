//https://www.hackerrank.com/challenges/between-two-sets/problem?isFullScreen=true

function getTotalX(a, b) {
    // Write your code here
  const ints = [];
  const minInt = a.sort((x, y) => x - y)[0];
  const maxInt = b.sort((x, y) => x - y)[0];
  for (let i = 1; minInt * i <= maxInt; i++) {
    const int = minInt * i;
    if (a.some(n => int % n !== 0)) continue;
    if (b.some(n => n % int !== 0)) continue;
    ints.push(int);
  }
  return ints.length;
}

let arr1 = [2, 4];
let arr2 = [16, 32, 96];
console.log(getTotalX(arr1, arr2));