//! ================= FUNCTIONS IN JAVASCRIPT =================
// Function = reusable block of code that performs a specific task


// ================= FUNCTION DECLARATION =================
function greet() {
    console.log('Hello World');
}
greet(); // function call


// ================= SIMPLE ADD FUNCTION =================
function add() {
    let x = 10;
    let y = 20;
    console.log(x + y);
}
add();


// ================= FUNCTION WITH PARAMETERS =================
// Parameter = variable in function definition
function greet1(name = 'User') {  // default parameter
    console.log('Hello', name);
}

// Arguments = actual values passed
greet1('Ram');
greet1('Shyam');
greet1(); // uses default value


// ⚠️ FUNCTION WITHOUT RETURN
function add1(x, y) {
    console.log('sum is', x + y);
}

add1(10, 20);   // 30
add1(10);       // NaN (10 + undefined)

// FIX using default values
function add2(x = 0, y = 0) {
    console.log(x + y);
}
add2(10, 20); // 30
add2(10);     // 10


// ================= FUNCTION WITH RETURN =================
function add3(x, y) {
    let sum = x + y;
    return sum;  // return ends function
}

const sum = add3(10, 20);
console.log(sum);


// ================= FUNCTION EXPRESSION =================
const add4 = function (a, b) {
    return a + b;
};
console.log(add4(10, 15));


// ================= DECLARATION vs EXPRESSION =================
function sub(a = 0, b = 0) {  // declaration
    return a - b;
}

const subtract = function (a = 0, b = 0) {  // expression
    return a - b;
};

console.log('sub:', sub(10, 5));
console.log('subtract:', subtract(10, 15));


// ================= ARROW FUNCTION =================
const mul = (a, b) => {
    return a * b;
};

const multiplication = (a, b) => a * b; // short form

console.log('Mul:', mul(5, 3));
console.log('Multiplication:', multiplication(5, 3));


// ================= CALLBACK FUNCTION =================
// Function passed as argument to another function

const parent = function (fn) {
    console.log('Parent function');
    const result = fn(10);  // calling callback
    console.log('Result:', result);
};

const children = function (num) {
    console.log('Child function:', num);
    return num * num;
};

// ❌ Wrong: parent(children(12))  → calling function immediately
// ✅ Correct: pass function reference
parent(children);



//generator

function* generate(){
    let i=0
    while(true){
        yield i
        i++
    }
}

console.log(generate().next())


//anonymous function

