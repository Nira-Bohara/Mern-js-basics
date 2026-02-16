// //array methods

// //higher order methods

//  const numbers = [123,4,5,3,6,];
//  //new arr =>ele
//  const arr=number.filter(val)=>{
//     if(val=>10){
//         return val
//     }
//  }



// //looping array 
// // forEAch 
// //arr.forEach(callback)

// const callback = (value,index,arr)=>{
// console.log(value,index,arr);

// }
// numbers.forEach(callback)

// numbers.forEach((value,index,arr)=>{
//       console.log(value,index,arr)




// })
 

// // numberds.forEach(function(value,index,arr))=>{
// //     console.log(value,index,arr)}


// //transformation

// //map
// // arr.map(callback)

//  const result= numbers.map((value)=>{
//     return value *2
// })
// console.log(numbers)
// console.log(result)

//filter
//arr.filter(callback)
// returns new Array

// const filtered=numbers.filter((value,index,arr)=>
// {
//     if(value %2 == 0){
//         return value
//     }
// })
// console.log(numbers)
// console.log(filtered);
// //
// const index = numbers.findIndex((value)=>{
//     if(value %2 ===0){
//         return value
//     }
// })

// //evey/some
// //return boolean
// const is_every_even =numbers.every((value)=>value %2===0)
// console.log(is_every_even);

// const is_some_even = numbers.some((value)=> value%2===0)
// console.log(is_some_even);

// console.log(index);


//reduce

//single value=> final result
// array->reduce->single Value
// //array.reduce(callback)
// const number =[34,56,23,23];
//  const sum=number.reduce((acc,value)=>{  //acc=accumulator
// return acc =acc+value
// },12);
// console.log(sum)

// const student =[
//     {
//     name:'gita',
//     roll:10,
//     std:10,
//     marks:[50,45,36,76,35],

//     },
//     {
//     name:'ram',
//     roll:13,
//     std:10,
//     marks:[50,45,36,76,35],

//     },
//     {
//     name:'hari',
//     roll:12,
//     std:10,
//     marks:[50,45,36,76,35],

//     },
//     {
//     name:'sita',
//     roll:11,
//     std:10,
//     marks:[50,45,36,76,35],

//     },
// ];

// // //60
// // reduce=>avg calculate
// // filter passes students
// // map pass student
// // //
// const passNames = students
//   .map(s => ({
//     ...s,
//     avg: s.marks.reduce((a, b) => a + b, 0) / s.marks.length
//   }))
//   .filter(s => s.avg >= 60)
//   .map(s => s.name);

// console.log(passNames);

// const students = [
//   {
//     name: 'gita',
//     roll: 10,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
//   {
//     name: 'ram',
//     roll: 13,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
//   {
//     name: 'hari',
//     roll: 12,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
//   {
//     name: 'sita',
//     roll: 11,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
// ];

// const new_arr = students.map((student)=>{
//     console.log(student);
//     const avg_marks = student.marks.reduce((acc,mark)=>{
//         return acc += mark
//     },0);

//     const avg= total_marks / student.marks.length;
//     student["avg_mark"]=calculateAvg(student.mark);
//     return student;
// });
// console.log(new_arr);

// const passNames = students
//   .map(s => ({
//     ...s,
//     avg: s.marks.reduce((a, b) => a + b, 0) / s.marks.length
//   }))
//   .filter(s => s.avg >= 40)
//   .map(s => s.name);

// console.log(passNames);

// const students = [
//   {
//     name: 'gita',
//     roll: 10,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
//   {
//     name: 'ram',
//     roll: 13,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
//   {
//     name: 'hari',
//     roll: 12,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
//   {
//     name: 'sita',
//     roll: 11,
//     std: 10,
//     marks: [50, 45, 36, 76, 35],
//   },
// ];

// // Step 1,2,3 combined
// const passNames = students
//   .map(student => {
//     // Calculate total marks
//     const total_marks = student.marks.reduce((acc, mark) => acc + mark, 0);
//     // Calculate average
//     const avg = total_marks / student.marks.length;
//     // Add avg to student object
//     student.avg_mark = avg;
//     return student;
//   })
//   // Keep only students with avg ≥ 60
//   .filter(student => student.avg_mark >= 60)
//   // Return only names of passing students
//   .map(student => student.name);

// console.log(passNames);

const students = [
  { name: 'gita', roll: 10, 
    std: 10,
     marks: [50, 45, 36, 76, 35] },

  { name: 'ram', 
     roll: 13,
     std: 10,
     marks: [60, 65, 70, 75, 80] },

  { name: 'hari',
     roll: 12, 
    std: 10,
     marks: [90, 95, 85, 80, 70] },
  { name: 'sita',
     roll: 11,
     std: 10, 
    marks: [40, 35, 30, 45, 50] },
];

// // Step 1: calculate avg for each student
// const student_Avg = students.map(student => {
//   const total = student.marks.reduce((acc, mark) => acc + mark, 0);
//   const avg = total / student.marks.length;
//   return { ...student, avg_mark: avg }; // return new object with avg
// });

// // Step 2: filter pass students (avg >= 60)
// const passStudents = student_Avg.filter(student => student.avg_mark >= 60);

// // Step 3: get names only
// const passNames = passStudents.map(student => student.name);

// // Step 4: print nicely
// console.log("Pass students:", passNames.join(", "));

const students = [
    {
        name: 'ram',
        roll: 10,
        std: 10,
        marks: [56, 45, 67, 87, 56],
    },
    {
        name: 'shyaam',
        roll: 11,
        std: 10,
        marks: [58, 60, 67, 87, 56],
    },
    {
        name: 'shyaam',
        roll: 12,
        std: 10,
        marks: [58, 22, 67, 40, 56],
    },
];


 const calculateAvg=(arr)=>{
    const total_marks = arr.reduce((acc, mark) => {
        return (acc += mark);
    }, 0);
    const avg = total_marks / arr.length;

    return avg;
};


const new_arr = students.map((student) => {
  student["avg_mark"] = calculateAvg(student.marks);
  return student;
});
console.log(new_arr);

const pass = students.filter((val) => {
  if (val.avg_mark >= 60) {
    return val;
  }
});
console.log(pass)
 
const passname = pass.map(student => student.name)
console.log(passname)

