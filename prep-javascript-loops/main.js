// create your loops here.
function whileLoop1() {
  const array = [];
  let n = 0;
  while (n < 10) {
    array.push(n);
    n++;
  }
  return array;
}
console.log('whileLoop1 output: ', whileLoop1());

function whileLoop2() {
  const array = [];
  let n = 0;
  while (n <= 18) {
    array.push(n);
    n += 2;
  }
  return array;
}
console.log('whileLoop2 output: ', whileLoop2());

function forLoop1() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    array.push(i);
  }
  return array;
}
console.log('forLoop1 output: ', forLoop1());

function forLoop2() {
  for (let i = 100; i >= 0; i--) {
    if (i === 0) {
      console.log('KABOOM!'); // added this if else into the code block for special effect :D
    } else {
      console.log('Time till explosion ' + i);
    }
  }
}
forLoop2();

const object = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const array = [];
  for (const properties in object) {
    array.push(properties);
  }
  return array;
}
console.log('forInLoop1 output: ', forInLoop1(object));

function forInLoop2(object) {
  const array = [];
  for (const properties in object) {
    array.push(object[properties]);
  }
  return array;
}
console.log('forInLoop2 output: ', forInLoop2(object));
