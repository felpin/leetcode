// https://leetcode.com/problems/orderly-queue/

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var orderlyQueue = function (s, k) {
  const arr = [...s]

  if (k > 1) {
    return arr.sort().join('')
  }

  const lowest = arr.slice(1).reduce((lowest, item, index) => {
    if (item < lowest.value) {
      return {value: item, index: [index + 1]}
    }

    if (item === lowest.value) {
      return {value: item, index: [...lowest.index, index + 1]}
    }

    return lowest
  }, {value: arr[0], index: [0]})

  return lowest.index.map(i => [...arr.slice(i), ...arr.slice(0, i)].join('')).sort()[0]
}