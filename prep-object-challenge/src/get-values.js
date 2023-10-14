/* exported getValues */
function getValues(object) {
  const answer = [];
  for (const values in object) {
    answer.push(object[values]);
  }
  return answer;
}
