//class
//A class in JavaScript is a blueprint for creating objects.

// It is introduced in ES6 (2015) and is mainly syntactic sugar over JavaScript’s prototype-based inheritance.

// let user = {
//   name: "",
//   emial: "",
//   password: "",
// };
// let user1 = {
//   name: "",
//   emial: "",
//   password: "",
// };
//! class
// class user2 {
//   name;
//   email;
//   #password;
// // construtor
//   constructor(name, email, password) {
//     this.name = name;
//     this.emial = email;
//     this.#password = password;
//   }
//   getPassword() {
//     return this.#password;
//   }
// }

// // const ram = new user2("RAm", "jhdfsjfsjd@132", "342342");
// // console.log(ram);
// // console.log(ram.name);
// // console.log(ram.password);
// // console.log(ram.getPassword());

// // let user1 = {
// //   name: "user",
// //   email: "gfd@gmail.com",
// //   password: "5454",
// //   getName() {
// //     const func = () => {
// //       console.log(this);
// //       return this.NamedNodeMap;
// //     };
// //     func();
// //   },
// // };
// // console.log(user1.getName);

// //class student name email, password roll phone faculty,

// // class student {
// //   #password
// //  name;
// //   email;
// //   password;
// //   roll;
// //   phone;
// //   faculty;
// //   constructor
// //   constructor(name, email,password,roll,phone,faculty){
// //   this.name=name;
// //   this.email=email;
// //   this.#password;
// //   this.roll=roll;
// //   this.phone=phone;
// //   this.faculty=faculty;
// //   }
// //    getPassword() {
// //   return this.#password;
// //  }
// // }
// // const student1 = new student('gita','dfsdfsdfs@3443gmail.com','343434','23',94388743874378,management);
// // console.log(student1);

// class student extends user2{

//   // constructor
//   constructor(name, email,password,roll,phone,faculty){
//  super(name,email,password); //?calling parent class constor
//   this.roll=roll;
//   this.phone=phone;
//   this.faculty=faculty;
//   }
// //    getPassword() {
// //   return this.#password;
// //  }
// }
// const student1 = new student('gita','dfsdfsdfs@3443gmail.com','343434','23',94388743874378,"ASD");
// console.log(student.name);

// calculator
class Calculator {
  //add
  static app_name = "simple calclator";
  add(a, b) {
    return a + b;
  }
  //sub
  static Sub(a, b) {
    return a - b;
  }
  // div
  div(a, b) {
    return a / b;
  }
}
const calc1 = new Calculator();
console.log(Calculator.app_name);
console.log(calc1.add(12, 3));
console.log(Calculator.Sub(12, 3));
