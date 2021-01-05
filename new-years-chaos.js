https://www.hackerrank.com/challenges/new-year-chaos/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays&isFullScreen=true

function minimumBribes(q) {

    let steps = 0;
    let tooChaotic = false;

    for (let i = 0; i < q.length; i++) {
        // q[i] - 1 is the origin position of the element
        // i is the new position
        if (q[i] - 1 - i > 2 ) {
            tooChaotic = true;
            break;
        }

        for (let j = Math.max(0, q[i] - 2); j < i; j++) {
            if (q[j] > q[i]) steps++;
        }
    }

    tooChaotic === true ? console.log("Too chaotic") : console.log(steps);
}

const arr = [1, 2, 5, 3, 4, 7, 8, 6];
minimumBribes(arr);