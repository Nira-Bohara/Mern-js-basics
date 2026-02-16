// ================= OBJECTS IN JAVASCRIPT =================
// Object is used to store related data in key-value pairs

// Object Literal (most common way)
const user = {
    name: 'Ram',
    email: 'ram@gmail.com',
    age: 28
};


// ================= ACCESSING OBJECT PROPERTIES =================

// 1️⃣ Dot Notation (.)
console.log(user.email);   // ram@gmail.com

let user_email = user.email;
console.log(user_email);


// 2️⃣ Bracket Notation []
console.log(user['name']); // Ram

// IMPORTANT: key must match exactly
// console.log(user['user age']); ❌ wrong key
console.log(user['age']);  // 28


// Dynamic key access
let key = 'name';
console.log(user[key]);  // Ram

// user.key ❌ wrong because it looks for property literally named "key"


// ================= MODIFY OBJECT PROPERTIES =================
user.age = 27;  // updating value


// ================= ADDING NEW PROPERTIES =================
user.password = '123456';
console.log(user);


// ================= OBJECT TRUTHINESS =================

// Objects are always truthy, even if empty
if ({}) {
    console.log('run');  // This will run
}


// ================= OBJECT COMPARISON =================

// Objects are compared by reference, not by value
console.log({} === {}); // false


// ================= ARRAY =================

// ❌ Wrong
// let arr = new array()

// ✅ Correct way (rarely used)
let arr1 = new Array();  

// ✅ Best & common way (Array Literal)
let numbers = [2];  
// Array literal

// Array = object ho
// key = index (0,1,2...)
// value = element

// ================= READING ELEMENT =================
const first_ele = numbers[0];
console.log("First element:", first_ele);


// ================= ADDING ELEMENT =================

// End bata add
numbers.push(2, 3, 4, 5);

// Start bata add
numbers.unshift(0, 1);

console.log("After adding:", numbers);


// ================= REMOVING ELEMENT =================

// End bata remove
const pop_ele = numbers.pop();
console.log("Popped element:", pop_ele);

// Start bata remove
const pop_ele_first = numbers.shift();
console.log("Shifted element:", pop_ele_first);


// ================= SEARCHING =================

console.log("Includes 2:", numbers.includes(2)); // boolean

console.log("Index of 2:", numbers.indexOf(2)); // first index

console.log("Index of 10:", numbers.indexOf(10)); // -1

console.log("Last index of 2:", numbers.lastIndexOf(2));


// ================= LENGTH =================

console.log("Length:", numbers.length);

console.log("Last element manual:", numbers[numbers.length - 1]);

console.log("First using at():", numbers.at(0));
console.log("Last using at():", numbers.at(-1));


// ================= SLICE =================
// slice(start, end)
// end exclusive
const sliced = numbers.slice(0, 3);
console.log("Slice result:", sliced);
console.log("Original after slice:", numbers); // no change


// ================= SPLICE =================
// splice changes original array

// 👉 Delete only
let temp1 = [...numbers]; // copy to avoid messing original
const deleted = temp1.splice(1, 3);
console.log("Deleted elements:", deleted);
console.log("After delete:", temp1);

// 👉 Delete + Add
let temp2 = [...numbers];
const deleted2 = temp2.splice(1, 3, 5, 6, 7);
console.log("Deleted:", deleted2);
console.log("After replace:", temp2);

// 👉 Add only
let temp3 = [...numbers];
const addedOnly = temp3.splice(1, 0, 5, 6, 7);
console.log("Added only returns:", addedOnly); // []
console.log("After add only:", temp3);


console.log("Final original numbers:", numbers);
