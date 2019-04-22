const same = require('./frequency-counter')

it('counts frequency', () => {
  expect(same([1, 2, 3, 2], [9, 1, 4, 4])).toBe(true)
  expect(same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])).toBe(false)
})
