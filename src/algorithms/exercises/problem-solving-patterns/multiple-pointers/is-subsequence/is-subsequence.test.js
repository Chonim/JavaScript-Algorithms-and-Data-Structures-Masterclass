const isSubsequence = require('./is-subsequence')

it('checks if first string is a subsequence of second string', () => {
  expect(isSubsequence('hello', 'hello world')).toBe(true)
  expect(isSubsequence('sing', 'sting')).toBe(true)
  expect(isSubsequence('abc', 'abracadabra')).toBe(true)
  expect(isSubsequence('abc', 'acb')).toBe(false)
})
