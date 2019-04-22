function sameFrequency (num1, num2) {
  const str1 = num1.toString()
  const str2 = num2.toString()

  const frequencyInStr1 = {}
  const frequencyInStr2 = {}
  for (const val of str1) {
    frequencyInStr1[val] ? frequencyInStr1[val] += 1 : frequencyInStr1[val] = 1
  }
  for (const val of str2) {
    frequencyInStr2[val] ? frequencyInStr2[val] += 1 : frequencyInStr2[val] = 1
  }
  for (const i in frequencyInStr1) {
    if (frequencyInStr1[i] !== frequencyInStr2[i]) {
      return false
    }
  }
  return true
}

module.exports = sameFrequency
