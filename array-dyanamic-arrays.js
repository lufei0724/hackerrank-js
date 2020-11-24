// https://www.hackerrank.com/challenges/dynamic-array/problem?isFullScreen=true

function dynamicArray(n, queries) {
    // Write your code here
    const seqList = [];
    let lastAnswer = 0;
    const lastAnswers = [];
    for (const query of queries) {
        const [type, x, y] = query;
        const index = (x ^ lastAnswer) % n;
        if (seqList[index] === undefined) seqList[index] = [];
        if (type === 1) {

            seqList[index] = [...seqList[index], y];
        } else {
            const seqIndex = y % seqList[index].length;
            lastAnswer = seqList[index][seqIndex];
            lastAnswers.push(lastAnswer);
        }
    }
    return lastAnswers;
}

const queries = [
  [1, 0, 5],
  [1, 1, 7],
  [1, 0, 3],
  [2, 1, 0],
  [2, 1, 1],
]

const n = 2
console.log(dynamicArray(n, queries))