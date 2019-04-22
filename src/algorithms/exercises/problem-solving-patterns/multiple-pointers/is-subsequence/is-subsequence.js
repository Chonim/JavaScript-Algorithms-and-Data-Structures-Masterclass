function isSubsequence (str1, str2) {
  let i = 0
  let trueCount = 0
  for (let j = 0; j < str2.length; j++) {
    if (str1[i] === str2[j]) {
      trueCount++
      i++
    }
  }
  return trueCount === str1.length
}

module.exports = isSubsequence
