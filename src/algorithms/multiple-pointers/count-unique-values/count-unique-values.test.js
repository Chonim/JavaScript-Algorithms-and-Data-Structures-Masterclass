const countUniqueValues = require('./count-unique-values')
const countUniqueValues2 = require('./count-unique-values')

it('counts unique values', () => {
  expect(countUniqueValues([1, 1, 1, 1, 2])).toBe(2)
  expect(countUniqueValues([1, 2, 3, 4, 4, 7, 12, 12, 13])).toBe(7)
  expect(countUniqueValues([])).toBe(0)
  expect(countUniqueValues([-2, -1, -1, 0, 1])).toBe(4)
})

it('counts unique values', () => {
  expect(countUniqueValues2([1, 1, 1, 1, 2])).toBe(2)
  expect(countUniqueValues2([1, 2, 3, 4, 4, 7, 12, 12, 13])).toBe(7)
  expect(countUniqueValues2([])).toBe(0)
  expect(countUniqueValues2([-2, -1, -1, 0, 1])).toBe(4)
})
