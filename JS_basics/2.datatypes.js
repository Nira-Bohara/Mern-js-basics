// ================= DATATYPES =================

// Primitive Datatypes in JavaScript:
// string, number, boolean, undefined, null

// ---------- STRING ----------
let str = 'hello';
let f = "world";

// Template literal (use backticks ` `)
// Allows embedding JS expressions using ${}
let g = `hello ${2+2}`;
console.log(g); // hello 4

// ---------- NUMBER ----------
let h = 12;     // integer
let i = 12.45;  // decimal (float)

// ---------- BOOLEAN ----------
let j = true;
let k = false;

// ---------- UNDEFINED ----------
// Variable declared but no value assigned
let l;

// ---------- NULL ----------
// Intentional empty value
let m = null;
console.log(m); // null

console.log('hello');


// ================= OPERATORS =================

// ---------- ARITHMETIC OPERATORS ----------
// + addition | - subtraction | * multiplication
// / division | % remainder | ** power
console.log(32 + 32);

let a = 34;
let b = 54;
let sum = a + b;
console.log(sum);

console.log(11 / 2);  // 5.5
console.log(11 % 2);  // 1 (remainder)
console.log(2 ** 4);  // 16


// ---------- ASSIGNMENT OPERATORS ----------
let d = 45;
d += 12;  // same as d = d + 12
console.log(d);


// ---------- COMPARISON OPERATORS ----------
let n = 23;
let o = 23;

console.log(n == o);   // true → compares only value
console.log(n === o);  // true → compares value + type (strict)


// ---------- LOGICAL OPERATORS ----------
// && AND → all conditions must be true
// || OR  → any one true is enough
// ! NOT  → reverses boolean value

console.log(true && true);   
console.log(false && true);  
console.log(true && false);  
console.log(false && false);

console.log(true || true);   
console.log(false || true);  
console.log(true || false);  
console.log(false || false);


// ---------- TERNARY OPERATOR ----------
// condition ? value_if_true : value_if_false
let age = 18;
let canVote = age >= 18 ? "yes" : "no";
console.log(canVote);


// ---------- UNARY OPERATORS (Increment/Decrement) ----------

// Post-increment → use first, then increase
let num = 0;
console.log(num++); // 0
console.log(num);   // 1

// Pre-increment → increase first, then use
console.log(++num); // 2
console.log(num);   // 2


// ================= TYPE CONVERSION =================


// Implicit (Type Coercion)
console.log(10 + '10'); // "1010" (number becomes string)
console.log(10 - '5');  // 5
console.log(10 - 'a');  // NaN (Not a Number)

// Explicit Conversion
console.log(Number('432')); // 432
console.log(String(754));   // "754"
console.log(Boolean(32));   // true
console.log(Boolean(""));   // false
console.log(Boolean(0));    // false


let number = "23";
console.log(number.toString()); // "23"
console.log(parseInt(number));  // 23


// ================= TRUTHY & FALSY =================

// Falsy values → 0, "", false, null, undefined, NaN
console.log(Boolean(''));        // false
console.log(Boolean(undefined)); // false
console.log(Boolean('null'));    // true (string!)
console.log(Boolean('0'));       // true (string!)
console.log(Boolean('1'));       // true


// ================= CONDITIONS =================

if (age !== 0) {
    console.log('run');
}

if (age) {  // any non-zero number = true
    console.log('run');
}

let res = null;

if (res === null || res === undefined) {
    // handle error
}

if ('') { // empty string is falsy → this will NOT run
    console.log(true);
}

//!typeof

console.log(typeof '')
console.log(typeof 1)
console.log(typeof undefined)
console.log(typeof null)