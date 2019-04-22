function areThereDuplicates (arr) {
  const lookup = {}
  for (const val of arr) {
    if (lookup[val]) {
      return true
    }
    lookup[val] = val
  }
  return false
}

module.exports = areThereDuplicates
