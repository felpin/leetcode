// https://leetcode.com/problems/find-median-from-data-stream/

var MedianFinder = function () {
  this.data = []
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  const getIndex = (startIndex, endIndex) => {
    if (startIndex === endIndex) {
      return num > this.data[startIndex] ? startIndex + 1 : startIndex
    }

    if ((endIndex - startIndex) % 2 === 0) {
      const meanIndex = (startIndex + endIndex) / 2
      return num > this.data[meanIndex] ? getIndex(meanIndex, endIndex) : getIndex(startIndex, meanIndex)
    }

    const meanIndex = (startIndex + endIndex + 1) / 2
    return num > this.data[meanIndex] ? getIndex(meanIndex, endIndex) : getIndex(startIndex, meanIndex - 1)
  }

  const index = getIndex(0, this.data.length)

  if (index === this.data.length) {
    this.data.push(num)
  } else {
    this.data.splice(index, 0, num)
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.data.length % 2 !== 0) {
    return this.data[(this.data.length - 1) / 2]
  }

  const half = this.data.length / 2
  return (this.data[half - 1] + this.data[half]) / 2
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */