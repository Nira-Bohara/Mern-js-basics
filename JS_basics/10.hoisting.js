//hoisting
//GEC-Global Execution Context (GEC) in JS
//JS code run hunu agadi, engine le sabai global-level variables ra functions lai memory ma allocate garne process ho.
// Yo initial environment ho jaha JS code execute huncha.
//JavaScript le code run hunu bhanda agadi variable & function declarations lai mathi (top) ma “sarako jasto” treat garxa.
//Declare first → Execute later
//variable declaration var x=200;
//memory creation phase [EC creation $ execution phase]
// phase
// x:undefined
//hoist:()
// {console.log("hoisted funtion");}
//phase ii
// x:20
/
//  }
// 🔑 Key Points

// var x; declaration hoisted huncha, assignment hoist hudaina → undefined print.

// let/const bhaye TDZ error aauxa.

// Function declaration fully hoisted → call before definition possible.

// Function expression (var/let) bhaye var hoist huncha, tar function hoina → TypeError aauxa.


//

// add(12,3);
// add(120,30);
// add(12,3);

// //phase I phase2

// function add(a,b){
// console.log(a+b);
// two()

// }

//GEC
//GEC-Global Execution Context (GEC) in JS
//JS code run hunu agadi, engine le sabai global-level variables ra functions lai memory ma allocate garne process ho.
// Yo initial environment ho jaha JS code execute huncha.

// console.log(y);
// // let y=34;
// const y= 30;
//TDZ
// TDZ (Temporal Dead Zone) vaneko k ho?

// Block vitra variable memory ma ta create huncha, tara initialize huna agadi access garnu mildaina.

// Basically:

// let ra const hoist ta huncha

// Tara value assign hune bela samma access error dincha

// Yo period lai Temporal Dead Zone (TDZ) vanincha

// 🟢 Var vs Let vs Const – Key Points
// 1️⃣ Scope

// var → function scoped

// let → block scoped ({} vitra matra)

// const → block scoped

// 2️⃣ Hoisting

// var → hoisted, initialized with undefined

// let → hoisted, but TDZ (cannot access before declaration)

// const → hoisted, TDZ, must initialize

// 3️⃣ Reassign

// var → ✅ yes

// let → ✅ yes

// const → ❌ no

// 4️⃣ Redeclare

// var → ✅ yes (same scope)

// let → ❌ no

// const → ❌ no

// 5️⃣ Use case

// var → old JS, function level variables

// let → modern JS, variables that change

// const → constants, values that never change

// 💡 Extra:

// let & const = safer, avoid bugs from block scope

// var = avoid in modern JS (bug-prone)
// finally
// 🔑 Key Points Summary

// var = function scope, redeclare & reassign allowed, no TDZ

// let = block scope, reassign allowed, no redeclare, TDZ applies

// const = block scope, cannot reassign, no redeclare, TDZ applies

// var
function testVar() {
    var x = 10;
    if(true){
        var x = 20;
        console.log(x); // 20
    }
    console.log(x); // 20
}
testVar();

// let
function testLet() {
    let x = 10;
    if(true){
        let x = 20;
        console.log(x); // 20
    }
    console.log(x); // 10
}
testLet();

// const
const y = 100;
// y = 200; //  comment this, cannot reassign

if(true){
    const y = 300; //!  block scoped
    console.log(y); // 300
}
console.log(y); // 100d
//? hello 

