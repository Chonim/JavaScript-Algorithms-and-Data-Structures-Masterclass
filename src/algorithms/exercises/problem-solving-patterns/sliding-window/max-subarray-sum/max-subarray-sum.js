function maxSubarraySum (arr, size) {
  if (arr.length < size) {
    return null
  }
  let sum = 0
  let maxSum = 0
  for (let i = 0; i < size; i++) {
    sum += arr[i]
  }
  maxSum = sum
  for (let i = 0; i < arr.length - size; i++) {
    sum = sum - arr[i] + arr[i + size]
    if (sum > maxSum) {
      maxSum = sum
    }
  }
  return maxSum
}

module.exports = maxSubarraySum
