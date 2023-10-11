/* exported isUpperCased */
function isUpperCased(word) {
  const newWord = word.split('');
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] !== newWord[i].toUpperCase()) {
      return false;
    }
  }
  return true;
}
