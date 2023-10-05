const number1 = 10;
const number2 = 20;

const product = number1 * number2;
console.log('The value of product is: ', product);
console.log('The type of the value product is:', typeof product);

const charge = 25;
const payment = 15;

const amountRemaining = charge - payment;
console.log('The value of the amountRemaining is:', amountRemaining);
console.log('The type of the amountRemaining is:', typeof amountRemaining);

const tests = 100;
const assignments = 50;
const final = 100;
const grade = (tests + assignments + final) / 3;

console.log('The value of grade is: ', grade);
console.log('the type of grade is: ', typeof grade);

const firstName = 'Khanh';
const lastname = 'Nguyen';
const fullName = firstName + ' ' + lastname;

console.log('The value of fullName is: ', fullName);
console.log('The type of fullName is: ', typeof fullName);

const pH = 7.8;
const isAcidic = pH < 7;

console.log('The value of isAcidic is: ', isAcidic);
console.log('The type of isAcidic is: ', typeof isAcidic);

const numberOfSoldiers = 300;
const isSparta = numberOfSoldiers === 300;

console.log('The value of isSparta is: ', isSparta);
console.log('The type of isSparta is: ', typeof isSparta);

let nickname = fullName;
nickname += ' ' + 'is the GOAT!';

console.log('The value of nickname is: ', nickname);
console.log('The type of nickname is: ', typeof nickname);
