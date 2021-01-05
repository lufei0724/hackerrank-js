//https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true&h_r=next-challenge&h_v=zen


const countingValleys = (steps, path) => {
  let valleys = 0;
  let currSeaLvl = 0;
  for (const s of path) {
    s === "U" ? currSeaLvl++ : currSeaLvl--;
    if (s === "U" && currSeaLvl === 0) {
      valleys++;
    }
  }
  return valleys;
}

let path = "UDDDUDUU";
console.log(countingValleys(8, path));
path = "DUDUDU";
console.log(countingValleys(6, path));