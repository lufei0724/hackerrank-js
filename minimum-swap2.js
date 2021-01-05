//https://www.hackerrank.com/challenges/minimum-swaps-2/forum?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

const minimumSwaps = (arr) => {

  const swapElementByIndex = (arr, from, to) => {
    const newArr = [...arr];
    const a = newArr[from];
    const b = newArr[to] ;
    newArr[from] = b;
    newArr[to] = a;
    
    return newArr;
  }

  let swapedArr = [...arr]
  let swaps = 0
  for (let i = 0; i < swapedArr.length - 1; i++) {
    if (swapedArr[i] === i + 1) continue;
    let j = swapedArr[i] - 1;
    swapedArr = swapElementByIndex(swapedArr, i, j);
    swaps++;
    i--;
  }

  console.log(swaps);
}

//const arr = [7, 1, 3, 2, 4, 5, 6];
//const arr = [1, 3, 5, 2, 4, 6, 7];

const arr = [2, 3, 4, 1, 5];
minimumSwaps(arr);