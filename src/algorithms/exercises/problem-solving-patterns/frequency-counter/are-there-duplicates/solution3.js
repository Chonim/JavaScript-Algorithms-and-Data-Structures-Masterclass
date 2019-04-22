function areThereDuplicates () {
  return new Set(arguments).size !== arguments.length
}

module.exports = areThereDuplicates
