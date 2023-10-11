/* exported isVowel */
function isVowel(character) {
  const vowels = /[aeiou]/i;
  return vowels.test(character);
}
