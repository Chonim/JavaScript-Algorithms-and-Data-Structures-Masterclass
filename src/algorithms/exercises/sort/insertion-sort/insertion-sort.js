const swap = require('../swap')

function insertionSort (arr) {
  let sortedArr = [arr[0]]
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < sortedArr[i - 1]) {
      arr = swap(arr, i - 1, i)
    }
    sortedArr.push(arr[i])
    for (let j = i; j >= 0; j--) {
      if (arr[j] < arr[j - 1]) {
        arr = swap(arr, j - 1, j)
      }
    }
  }
  return arr
}

module.exports = insertionSort
