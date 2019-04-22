
function findLongestSubstring (str) {
  let start = 0
  let end = start + 1
  let longest = 0
  let lookup = {}
  while (start < str.length) {
    lookup[str[start]] = true
    if (!lookup[str[end]] && end < str.length) {
      lookup[str[end]] = true
      end++
    } else if (lookup[str[end]] || end === str.length) {
      longest = Math.max(longest, end - start)
      start++
      end = start + 1
      lookup = {}
    } else {
      break
    }
  }
  return longest
}

module.exports = findLongestSubstring
