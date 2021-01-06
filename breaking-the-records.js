//https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?isFullScreen=true

function breakingRecords(scores) {
  let [hs, ls] = [scores[0], scores[0]];
  let [max, min] = [0, 0];
  
  for (let score of scores) {
    if (score > hs) { hs = score; max++ }
    if (score < ls) { ls = score; min++ }
  }
  return [max, min];
}

const scores = [10, 5, 20, 20, 4, 5, 2, 25, 1];
console.log(breakingRecords(scores));
