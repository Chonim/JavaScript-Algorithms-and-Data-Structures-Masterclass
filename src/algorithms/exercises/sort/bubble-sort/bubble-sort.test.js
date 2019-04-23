const bubbleSort = require('./bubble-sort')

it('returns a sorted array by bubble sort', () => {
  expect(bubbleSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5])
})
