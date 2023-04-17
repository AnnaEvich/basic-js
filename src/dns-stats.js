const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
let newObj = {};
domains.forEach(domain => {
  let newArr = domain.split('.').reverse();
  newArr.forEach((subdomain, i) => {
    let key = '.'.concat(newArr.slice(0, i + 1).join('.'))
    if(newObj[key]){
      newObj[key] += 1
    } else{
      newObj[key] = 1
    }
  })
})
return newObj
}

module.exports = {
  getDNSStats
};
