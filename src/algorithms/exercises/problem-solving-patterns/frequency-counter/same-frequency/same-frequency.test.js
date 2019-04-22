const sameFrequency = require('./same-frequency')

it('finds out if two numbers have same frequency of digits', () => {
  expect(sameFrequency(182, 281)).toBe(true)
  expect(sameFrequency(34, 14)).toBe(false)
  expect(sameFrequency(3589578, 5879385)).toBe(true)
  expect(sameFrequency(22, 222)).toBe(false)
})
