//1. let const / block scope

//2. template literal
// ``

//3. arrow function

//4. default parameter

//5. promises

//6. async/await => 2017

//7. class

//8. import/export

//9. spread & rest operator [...]
// Spread [...]  => expand / copy obj/array
const user = {
  name: "john Doe",
  phone: "123456543",
};

let user2 = {
  email: "john@gmail.com",
};

let newUser = { ...user, ...user2 };
newUser.name = "abc";

console.log(newUser);
console.log(user);

// Array
let numbers = [1, 2, 3, 4, 5];
let newArr = [...numbers];
newArr.push(34, 54);

console.log(numbers, newArr);

const arr = [...numbers, ...newArr];
console.log(arr);

// Rest [...] => accumulate
const add = (...numbers) => {
  console.log(numbers);
  return numbers.reduce((acc, value) => (acc += value));
};

console.log("sum", add(12, 3, 4, 34, 45));

//10. Destructuring
const obj = {
  name: "john Doe",
  phone: "123456543",
};

// Destructure name and phone from newUser
let { name: userName, phone, ...rest } = newUser;

console.log(userName, phone); // Now phone is defined
console.log(rest); // rest only contains email

// Function destructuring example
const func = ([name, email]) => {
  console.log(name, email);
};
func(["abc", "abc@gmail.com"]);

// Array destructuring
const array = [23, 4, 5];
let [a, ...other] = array;
console.log(a, other);

//11. Enhanced object literal => {}
let nameVar = "john";
let password = "12345678";
let emailVar = "john@gmail.com";

let newObj = {
  name: nameVar,
  email: emailVar,
  password,
};

console.log(newObj);
