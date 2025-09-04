
// const codeLandUsernameValidation = (str) => {
//   const regex = /^[a-zA-Z][a-zA-Z0-9_]{2,24}$/;
//   const result = (regex.test(str) && str[str.length - 1]) !== '_' ? 'true' : 'false';
//   return result;
// }

const isLetter = (letter) => {
  const code = letter.charCodeAt(0);
  const result = (code >= 65 && code <= 90 || code >= 97 && code <= 122);
  return result;
}

const isDigit = (digit) => {
  const code = digit.charCodeAt(0);
  const result = (code >= 48 && code <=57);
  return result;
}

const codeLandUsernameValidation = (str) => {
  if(str.length < 4 || str.length > 25) {
    return false;
  }

  if(!isLetter(str[0])) return false;

  if(str[str.length - 1] === '_') {
    return false;
  }

  for(let each of str) {
    if(!isLetter(each) && !isDigit(each) && each !== '_') {
      return false;
    }
  }

  return true;
}

console.log('username validation', codeLandUsernameValidation("u__hellowold12"))
