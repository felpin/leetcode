// https://leetcode.com/problems/valid-sudoku/

function isValidGroup(group) {
  const entries = new Set()

  for (const element of group) {
    if (element === '.') {
      continue
    }

    if (entries.has(element)) {
      return false
    }

    entries.add(element)
  }

  return true
}

function hasInvalidLine(board) {
  for (const line of board) {
    if (!isValidGroup(line)) {
      return true
    }
  }

  return false
}

function hasInvalidColumn(board) {
  for (let i = 0; i < 9; i++) {
    const column = []

    for (let j = 0; j < 9; j++) {
      column.push(board[j][i])
    }

    if (!isValidGroup(column)) {
      return true
    }
  }

  return false
}

function hasInvalidGroup(board) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const group = []

      for (let k = 0; k < 3; k++) {
        for (let l = 0; l < 3; l++) {
          group.push(board[i * 3 + k][j * 3 + l])
        }
      }

      if (!isValidGroup(group)) {
        return true
      }
    }
  }

  return false
}

function isValidSudoku(board) {
  return !hasInvalidLine(board) && !hasInvalidColumn(board) && !hasInvalidGroup(board)
}