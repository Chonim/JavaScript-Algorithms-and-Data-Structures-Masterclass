function search (array, val) {
  let min = 0
  let max = array.length - 1

  while (min <= max) {
    const middle = Math.floor((min + max) / 2)
    const currentElement = array[middle]

    if (currentElement < val) {
      min = middle + 1
    } else if (currentElement > val) {
      max = middle - 1
    } else {
      return middle
    }
  }
  return -1
}

module.exports = search
