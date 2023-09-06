// Boolean: Booleans represent true or false values

//  01

let isTrue = true;
let isFalse = false;

console.log(isTrue + 'isFalse'); // output: true is false

// 02 with null and undefined

let result;
result = Boolean(undefined);
console.log(result); // false
result = Boolean(null);
console.log(result); // false

// 03
const x = new Boolean(false);
if (x) {
  alert('true');
} else {
  alert('false');
}

