// tanpa konsep FP
console.log("-------------------------------tanpa konsep FP--------------------------------------");
const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark = [];
for(let i = 0; i < names.length; i++) {
  newNamesWithExcMark.push(`${names[i]}!`);
}
console.log(newNamesWithExcMark); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
newNamesWithExcMark[0] = "hack";
console.log(newNamesWithExcMark); // output: [ 'hack', 'Ron!', 'Jeff!', 'Thomas!' ]
// immutable
console.log(names); // output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]

// menggunakan konsep FP
console.log("-------------------------------menggunakan konsep FP--------------------------------------");
const names1 = ['Harry', 'Ron', 'Jeff', 'Thomas'];
const newNamesWithExcMark1 = names1.map((name) => `${name}!`);
console.log(newNamesWithExcMark1); // output: [ 'Harry!', 'Ron!', 'Jeff!', 'Thomas!' ]
newNamesWithExcMark1[0] = "hack";
console.log(newNamesWithExcMark1); // output: [ 'hack', 'Ron!', 'Jeff!', 'Thomas!' ]
// immutable
console.log(names1); // output: [ 'Harry', 'Ron', 'Jeff', 'Thomas' ]