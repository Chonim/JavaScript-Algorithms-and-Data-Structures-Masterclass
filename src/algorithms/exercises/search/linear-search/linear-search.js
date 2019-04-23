function linearSearch (arr, val) {
  let foundIndex = -1
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      foundIndex = i
    }
  }
  return foundIndex
}

module.exports = linearSearch
