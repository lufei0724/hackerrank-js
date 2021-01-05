//https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true

const jumpingOnClouds = (c) => {
  let jumps = 0;
  for (let i = 0; i < c.length; ) {
    if (i === c.length - 1) break;

    c[i+2] === 0 ? i += 2 : i++;

    jumps++;
  }
  return jumps;
}

const clouds = [0, 0, 1, 0, 0, 1, 0, 0, 0];
console.log(jumpingOnClouds(clouds));