const insertionSort = require('./insertion-sort')

it('returns a sorted array by insertion sort', () => {
  expect(insertionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5])
})
