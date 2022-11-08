// https://leetcode.com/problems/maximum-69-number/

/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
  const s = '' + num

  for (let i = 0; i < s.length; i++) {
    if (s[i] === '6') {
      return parseInt(s.slice(0, i) + '9' + s.slice(i + 1), 10)
    }
  }

  return num
};