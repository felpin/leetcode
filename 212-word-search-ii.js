// https://leetcode.com/problems/word-search-ii/

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  const root = new Node('^')

  for (const word of words) {
    root.addChild(word + '$')
  }

  const set = new Set()

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      for (const item of traverse(board, i, j, root, '')) {
        set.add(item)
      }
    }
  }

  return Array.from(set.values())
};

function traverse(board, i, j, node, word) {
  const result = []

  const value = board[i][j]
  const nextNode = node.children[value]

  if (!nextNode) {
    return result
  }

  const nextWord = word + value

  if (nextNode.children['$']) {
    result.push(nextWord)
  }

  const hasTop = i > 0 && board[i - 1][j] !== '_'
  const hasBottom = i < board.length - 1 && board[i + 1][j] !== '_'
  const hasLeft = j > 0 && board[i][j - 1] !== '_'
  const hasRight = j < board[i].length - 1 && board[i][j + 1] !== '_'

  if (!hasTop && !hasBottom && !hasLeft && !hasRight) {
    return result
  }

  const nextBoard = [
    ...board.slice(0, i),
    [...board[i].slice(0, j), '_', ...board[i].slice(j + 1)],
    ...board.slice(i + 1)
  ]

  if (hasTop) {
    result.push(...traverse(nextBoard, i - 1, j, nextNode, nextWord))
  }

  if (hasBottom) {
    result.push(...traverse(nextBoard, i + 1, j, nextNode, nextWord))
  }

  if (hasLeft) {
    result.push(...traverse(nextBoard, i, j - 1, nextNode, nextWord))
  }

  if (hasRight) {
    result.push(...traverse(nextBoard, i, j + 1, nextNode, nextWord))
  }

  return result
}

function Node(value) {
  this.value = value
  this.children = {}
}

Node.prototype.addChild = function (word) {
  const value = word.slice(0, 1)
  let child = this.children[value]

  if (!child) {
    child = new Node(value)
    this.children[value] = child
  }

  if (word.length > 1) {
    child.addChild(word.slice(1))
  }
}