const countApplesAndOranges = (s, t, a, b, apples, oranges) => {
  const appleLocations = apples.map(apple => apple + a)
  const orangeLocations = oranges.map(orange => orange + b)
  const countOfApples = appleLocations.filter(a => a >= s && a <= t).length
  const countOfOranges = orangeLocations.filter(o => o >=s && o <= t).length

  console.log(countOfApples)
  console.log(countOfOranges)
}

const start = 7
const end = 11
const appleTreeLocation = 5
const orangeTreeLocation = 15
const applesFromTree = [-2, 2, 1]
const orangesFromTree = [5, -6]

countApplesAndOranges(
   start,
   end,
   appleTreeLocation,
   orangeTreeLocation,
   applesFromTree,
   orangesFromTree)