// Undefined: This represents a variable that has been declared but has not been assigned a value.
var myName;
console.log(myName); //output: undefined

let undefinedVariable;
console.log(undefinedVariable); // Outputs: undefined

let nam;
console.log(nam); // Output: undefined

let a;
console.log(a); // Output: undefined

// It is also possible to explicitly assign undefined to a variable. For example,

let name = 'iqra';
// assigning undefined to the name variable
name = undefined;
console.log(name);

// In JavaScript, undefined and null are treated as false values. For example,
if (null || undefined) {
  console.log('null is true');
} else {
  console.log('Null is false');
} //Output: Null is false
