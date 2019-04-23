
function naiveStringSearch (longStr, shortStr) {
  let count = 0
  for (let i = 0; i < longStr.length - shortStr.length + 1; i++) {
    if (longStr[i] === shortStr[0]) {
      for (let j = 0; j < shortStr.length; j++) {
        if (longStr[i + j] === shortStr[j]) {
          if (j === shortStr.length - 1) {
            count++
            break
          }
        } else {
          break
        }
      }
    }
  }
  return count
}

module.exports = naiveStringSearch
