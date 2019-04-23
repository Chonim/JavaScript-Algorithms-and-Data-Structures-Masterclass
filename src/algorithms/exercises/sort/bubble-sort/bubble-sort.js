const swap = require('../swap')

function bubbleSort (arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr = swap(arr, j, j + 1)
      }
    }
  }
  return arr
}

module.exports = bubbleSort
