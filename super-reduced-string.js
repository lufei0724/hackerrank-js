https://www.hackerrank.com/challenges/reduced-string/problem?isFullScreen=true

const superReducedString = (s) => {
  if (s.length === 0) {
    return "Empty String"
  }

  const i = s.search(/([a-z])\1/);
  if (i === -1) {
    return s;
  }

  let newStr = s.slice(0, i).concat(s.slice(i + 2));
  return superReducedString(newStr);
}

const str = "aaabccddd";
console.log(superReducedString(str));