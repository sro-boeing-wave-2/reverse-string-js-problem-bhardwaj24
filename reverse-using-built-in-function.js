// The intent of this file is to reverse
// the string using built in functions.
const reverse = (str) => {
  const splitstr = str.split('');
  const revarray = splitstr.reverse();
  const joinarray = revarray.join('');
  return joinarray;
};

module.exports = reverse;
