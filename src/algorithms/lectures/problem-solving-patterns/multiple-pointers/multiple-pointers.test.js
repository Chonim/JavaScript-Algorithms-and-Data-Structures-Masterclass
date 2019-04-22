const sumZero = require('./multiple-pointers')

it('finds the first pair that makes 0', () => {
  expect(sumZero([-3, -2, -1, 0, 1, 2, 3])).toEqual([-3, 3])
  expect(sumZero([-2, 0, 1, 3])).toEqual(undefined)
  expect(sumZero([1, 2, 3])).toEqual(undefined)
})
