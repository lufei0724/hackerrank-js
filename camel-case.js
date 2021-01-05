//https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true

const s = "oneTwoThreeaaWoooSS";
const reg = /^([a-z]*)|([A-Z][a-z]*)/g
const match = s.match(reg)
console.log(match)