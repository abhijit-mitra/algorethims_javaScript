// const palindrome = (str) => {
//   const reversed = str.split('').reverse().join('');
//   return str === reversed;
// }

const palindrome = (str) => (
  str.split('').every((char,index)=> char===str[str.length-index-1])
)
module.exports = palindrome;
