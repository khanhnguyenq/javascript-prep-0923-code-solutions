/* exported isLowerCased */
function isLowerCased(word) {
  const newWord = word.split('');
  for (let i = 0; i < newWord.length; i++) {
    if (newWord[i] !== newWord[i].toLowerCase()) {
      return false;
    }
  }
  return true;
}
