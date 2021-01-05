function rotLeft(a, d) {
    const arr = [...a];
    while (d > 0) {
        const element = arr.shift();
        arr.push(element);
        d--;
    }
    return arr;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4));