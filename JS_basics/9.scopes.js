// // //scopes
// // //defiine where  the variable are visible / accessible

// // //there are 4 types of scope

// // 1.global scope

// //let const var
// let global_let = "global let ";
// const global_const = "global const";
// var global_var ="global var";

// // 2.block scope
// // {}
// console.log("globsl", global_const);
// console.log("global", global_let);
// console.log("global", global_var);

// if (true){
//     let block_let = "block let"
//     const block_const ="block cinst"
//     var block_var = "block var"

//     // global_let ="123"
// //     console.log("globsl", global_const);
// // console.log("global", global_let);
// // console.log("global", global_var);
// console.log("block", block_const)
// console.log("block", block_let)
// console.log("block", block_var)
// }
// console.log(block_var);


// // 3.function scope
// function scope(){
//     // console.log(block_var);
//     let function_let ="function let";
//     const function_const = "function const";
//     var function_var = "functio var";
//     console.log("function",global_const);
//     console.log("function",global_let);
//     console.log("function",global_var);
// }
//     scope();
//     console.log(function_var);
    
    //{
    // let and const are block scope
    //var is function scope
    

// 4.laxical scope

// function one(){
//     //scope chaining
//     let x= 10;
//     function two(){
//         console.log(x);
        
//     }
//     two();
// }
// one();
// let a = 1;

// function outer() {
//   let b = 2;

//   function inner() {
//     let c = 3;
//     console.log(a, b, c);
//   }

//   inner();
// }

// outer();

// function one(){
//     if(true){
//         let x=200;
//         console.log(x);
//         x=400;
        
//     }
//     console.log(x);
    
// }
// one();

x = 400;
function one() {
     let x = 200;
     if (true){
    if (true) {
        // let x = 200;
        console.log(x);
        x= 400  // 200
    }
    console.log(x);//not defined
    
     }
    console.log(x);  // Error
}

one();

