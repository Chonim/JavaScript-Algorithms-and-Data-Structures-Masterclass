const linearSearch = require('./linear-search')

it('loop throuth the array and return the index of the found element', () => {
  expect(linearSearch([1, 2, 3], 2)).toBe(1)
  expect(linearSearch([1, 2, 3], 1)).toBe(0)
  expect(linearSearch([1, 2, 3], 3)).toBe(2)
  expect(linearSearch([1, 2, 3], 4)).toBe(-1)
})
