const validAnagram = require('./anagram')
const validAnagram2 = require('./anagram2')

it('is valid anagram', () => {
  expect(validAnagram('', '')).toBe(true)
  expect(validAnagram('aaz', 'zza')).toBe(false)
  expect(validAnagram('anagram', 'nagaram')).toBe(true)
  expect(validAnagram('rat', 'cat')).toBe(false)
  expect(validAnagram('awesome', 'awesom')).toBe(false)
  expect(validAnagram('qwerty', 'qeywrt')).toBe(true)
  expect(validAnagram('texttwisttime', 'timetwisttext')).toBe(true)
})

it('is valid anagram', () => {
  expect(validAnagram2('', '')).toBe(true)
  expect(validAnagram2('aaz', 'zza')).toBe(false)
  expect(validAnagram2('anagram', 'nagaram')).toBe(true)
  expect(validAnagram2('rat', 'cat')).toBe(false)
  expect(validAnagram2('awesome', 'awesom')).toBe(false)
  expect(validAnagram2('qwerty', 'qeywrt')).toBe(true)
  expect(validAnagram2('texttwisttime', 'timetwisttext')).toBe(true)
})
