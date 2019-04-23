const naiveStringSearch = require('./naive-string-search')

it('returns the count of a short string in a long string', () => {
  expect(naiveStringSearch('wowomgzomg', 'omg')).toBe(2)
})
