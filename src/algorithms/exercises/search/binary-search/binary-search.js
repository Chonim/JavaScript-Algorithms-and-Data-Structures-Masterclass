function binarySearch (arr, val) {
  let left = 0
  let right = arr.length - 1
  while (left <= right) {
    const middle = Math.floor((left + right) / 2)
    const currentEl = arr[middle]

    if (currentEl < val) {
      left = middle + 1
    } else if (currentEl > val) {
      right = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

module.exports = binarySearch
