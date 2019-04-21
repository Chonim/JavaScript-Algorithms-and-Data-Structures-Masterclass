const search = require('./divide-and-conquer')

it('has to get correct index', () => {
  expect(search([1, 2, 3, 4, 5, 6], 4)).toBe(3)
  expect(search([1, 2, 3, 4, 5, 6], 6)).toBe(5)
  expect(search([1, 2, 3, 4, 5, 6], 11)).toBe(-1)
})
