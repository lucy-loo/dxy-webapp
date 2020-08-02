/**
 * input: "1234567890"
 * output: "1,234,567,890"
 * @param _number
 */
function formatNumber(_number: number | string) {
  let number = '0'
  if (typeof _number === 'string') {
    number = /[0-9]+/.exec(_number)[0] || '0'
  } else {
    number = String(_number) || '0'
  }
  let result = '',
    tmp = ''
  for (let i = number.length - 1; i > -1; i--) {
    const char = number[i]
    if (tmp.length === 3) {
      result = ',' + tmp + result
      tmp = char
    } else if (tmp.length < 3) {
      tmp = char + tmp
    }
  }
  result = tmp + result
  return result
}

export default formatNumber
