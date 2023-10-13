/* exported getKeys */
function getKeys(object) {
  const answer = [];
  for (const key in object) {
    answer.push(key);
  }
  return answer;
}
