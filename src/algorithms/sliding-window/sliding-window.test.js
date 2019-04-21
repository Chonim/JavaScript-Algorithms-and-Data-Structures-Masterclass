const maxSubarraySum = require('./sliding-window')

it('gets maximum sums of an array', () => {
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10)
  expect(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17)
  expect(maxSubarraySum([4, 2, 1, 6], 1)).toBe(6)
  expect(maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13)
  expect(maxSubarraySum([], 4)).toBe(null)
})
