const selectionSort = require('./selection-sort')

it('returns a sorted array by selection sort', () => {
  expect(selectionSort([5, 3, 4, 1, 2])).toEqual([1, 2, 3, 4, 5])
})
