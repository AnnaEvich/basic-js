const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */

const chainMaker = {
  chainArr: [],

  getLength() {
    return this.chainArr.length
  },

  addLink(value) {
    if (value === null) {
      this.chainArr.push('null')
    } else if (value === 0) {
      this.chainArr.push('0')
    } else if (value === NaN) {
      this.chainArr.push('NaN')
    } else {
      this.chainArr.push(value.toString())
    }

    return this
  },

  removeLink(position) {
    if (this.chainArr[position - 1]) {
      this.chainArr.splice(position - 1, 1)
      return this
    } else {
      this.chainArr = []
      throw Error(`You can't remove incorrect link!`)
    }
  },

  reverseChain() {
    this.chainArr.reverse()
    return this
  },

  finishChain() {
    let result = '( ' + this.chainArr.join(' )~~( ') + ' )'
    this.chainArr = [];
    return result
  }
}

module.exports = {
  chainMaker
};
