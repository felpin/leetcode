// https://leetcode.com/problems/online-stock-span/

var StockSpanner = function () {
  this.prices = []
  this.differences = []
  this.span = []
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  let pointer = 0

  while (pointer < this.prices.length) {
    const index = this.prices.length - (pointer + 1)

    const _price = this.prices[index]
    const difference = price - _price

    if (difference < 0) {
      const span = pointer + 1

      this.prices.push(price)
      this.span.push(span)
      this.differences.push(difference)

      return span
    }

    pointer += this.span[index]
  }

  this.prices.push(price)
  this.differences.push(price)
  this.span.push(this.prices.length)

  return this.prices.length
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */