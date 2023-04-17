const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const k = 0.693

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if(typeof sampleActivity !=='string' || sampleActivity < 1){
    return false
  } else if (!Number(sampleActivity)){
    return false
  } else if (sampleActivity > MODERN_ACTIVITY){
    return false
  }
  let number = Math.log(MODERN_ACTIVITY / sampleActivity) / (k / HALF_LIFE_PERIOD);
  return Math.ceil(number);
}

module.exports = {
  dateSample
};
