const swap = require('../swap')

function selectionSort (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minVal = arr[i]
    let minIdx = 0
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < minVal) {
        minVal = arr[j]
        minIdx = j
      }
    }
    if (minVal !== arr[i]) {
      arr = swap(arr, i, minIdx)
    }
  }
  return arr
}

module.exports = selectionSort
