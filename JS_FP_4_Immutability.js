console.log("-----Mutable-----");
function max(arrayOfNumbers) {
  return arrayOfNumbers.sort((a, b) => a - b).pop();
}
const numbers = [10, 23, 24, 7, 42, 18];
const largest = max(numbers);
console.log(largest); // Output: 42
console.log(numbers); // Output: [ 7, 10, 18, 23, 24 ]

// Object.assign
function registerEmail(person, email) {
  return Object.assign(person, { email });
}
const person = {
  name: "John",
  username: "johndoe",
};
const personWithEmail = registerEmail(person, "john@dicoding.com");
console.log(person); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
console.log(personWithEmail); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }

console.log("-----Immutable-----");
const numbersImmutable = [10, 23, 24, 7, 42, 18];
function maxImmutable(arrayOfNumbers) {
  // menggunakan spread operator untuk menduplikasi nilai arrayOfNumbers
  return [...arrayOfNumbers].sort((a, b) => a - b).pop();
}
const largestImmutable = maxImmutable(numbersImmutable);
console.log(largestImmutable); // Output: 42
console.log(numbersImmutable); // Output: [ 10, 23, 24, 7, 42, 18 ]

const personImmutable = {
  name: "John",
  username: "johndoe",
};
function registerEmailImmutable(person, email) {
  // menggunakan spread operator untuk menduplikasi nilai person
  return { ...person, email };
}
const personWithEmailImmutable = registerEmailImmutable(personImmutable, "john@dicoding.com");
console.log(personImmutable); // Output: { name: 'John', username: 'johndoe' }
console.log(personWithEmailImmutable); // Output: { name: 'John', username: 'johndoe', email: 'john@dicoding.com' }
