//https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true

function repeatedString(s, n) {
    const getCountInStr = (str) => {
        return str.split("").filter(c => c === "a").length;
    }
    
    let count = 0
    if (s.length >= n) {
        count = getCountInStr(s.substr(0, n));
        return count;
    }
    
    let reminderStrLength = n % s.length;
    let numOfStrRepeats = Math.floor(n / s.length);
    count = getCountInStr(s) * numOfStrRepeats;
    if (reminderStrLength !== 0) {
        count += getCountInStr(s.substr(0, reminderStrLength));
    }
    return count;
}

const str = "abca";
console.log(repeatedString(str, 3));