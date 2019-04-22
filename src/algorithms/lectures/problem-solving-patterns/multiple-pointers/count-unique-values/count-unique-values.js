function countUniqueValues (arr) {
  let uniqueCount = 0
  for (const i in arr) {
    if (i < 1) {
      uniqueCount++
      continue
    }
    if (arr[i] !== arr[i - 1]) {
      uniqueCount++
    }
  }
  return uniqueCount
}

module.exports = countUniqueValues
