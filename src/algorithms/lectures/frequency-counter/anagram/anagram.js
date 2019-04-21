function validAnagram (str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  const charsInStr1 = {}
  const charsInStr2 = {}
  for (const val of str1) {
    charsInStr1[val] = (charsInStr1[val] || 0) + 1
  }
  for (const val of str2) {
    charsInStr2[val] = (charsInStr2[val] || 0) + 1
  }
  for (const key in charsInStr1) {
    if (!(key in charsInStr2)) {
      return false
    }
    if (charsInStr2[key] !== charsInStr1[key]) {
      return false
    }
  }
  return true
}

module.exports = validAnagram
