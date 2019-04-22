const areThereDuplicates = require('./are-there-duplicates')

it('finds out if there is any duplicate values', () => {
  expect(areThereDuplicates([1, 2, 3])).toBe(false)
  expect(areThereDuplicates([1, 2, 2])).toBe(true)
  expect(areThereDuplicates(['a', 'b', 'c', 'a'])).toBe(true)
})
