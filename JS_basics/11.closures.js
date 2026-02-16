//closure
A closure is a function that remembers and can access variables from its outer (lexical) scope even after the outer function has finished executing.
 Parent Function
Closure =
When an inner function keeps access to the variables of its parent function.
Even if the parent function is done running,
the child function still "remembers" the parent’s variables.

// A function that contains another function inside it.

// Child Function

// A function that is defined inside another function.

a=12, b=23
const add =(a,b)=>{
    return a+b;

};
add(12,3);
add(120,4);

laxical

const parent = ()=>{
    let x= "parent var";
    const child = () =>{
        console.log(x);
        
    };
    //child()
    return child;


};
const child = paraent ();
child();

A variable becomes private when:

It is declared inside a function and is not returned or exposed outside.

Because of closure, only the inner function can access it.

const createCounter = ()=>{
let count = 0 ;

const updateCount =()=>{
    console.log(count);
    count++;
};
    return updateCount;
};
//clouure
const counter = createCounter();
const counter1=createCounter();
counter();
counter();
counter1();
counter1();
counter();
counter();

updateCount();
updateCount();
updateCount();
count = 10;
updateCount();
updateCount();

initial count arg, inc, reset = 0 


const createCounter = (initial=0)=>{
let count = initial
const increament = ()=>{
    count++
    console.log(count);
    
}
const reset = ()=>{
    count = initial;
};
return{
    increament:increament,
    reset : reset,
};
};
const counter = createCounter();
counter.increament();
counter.increament();
counter.increament();
counter.reset();
counter.increament();


createAcount(name, initail_amt) return=> withdr





