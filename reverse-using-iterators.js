// The intent of this file is to reverse the string using iterators (for, foreach)
const reverse = (str) => {
  let str2 = '';
  let i;
  for (i = 0; i < str.length; i += 1) {
    str2 = str.charAt(i) + str2;
  }
  return str2;
};

module.exports = reverse;
