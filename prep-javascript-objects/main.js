const person = {
  firstName: 'Khanh',
  lastName: 'Nguyen',
  hobby: 'Building Computers',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;

console.log("The person's full name is :", fullName);

const job = (person.job = 'Student');

console.log("The person's current job is: ", job);

const previousJob = (person['previousJob'] = 'Vendor Management');

console.log("This person's previous job is: ", previousJob);

console.log('The complete person object is: ', person);
