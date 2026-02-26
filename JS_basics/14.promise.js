// //! promise
// //A Promise is a JavaScript object that represents the eventual completion or failure of an asynchronous operation and its resulting value.
// // states
// // * pending
// // * fulfilled
// //* rejected

// // custom
// console.log("Start");
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // async task
//     resolve("promise resolved");
//     // reject("promise rejected");
//   }, 2000);
// });

// // console.log(promise);

// //! handling promise
// // .then()
// // promise
// //   .then((data) => {
// //     console.log(data);
// //   })
// //   .catch((error) => {
// //     console.log(error);
// //   })
// //   .finally(() => {
// //     console.log("finally");
// //   });

// const fetchUser = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;
//       if (error) {
//         reject({ message: "User fetch failed" });
//       } else {
//         resolve({ name: "John", id: 1 });
//       }
//     }, 2000);
//   });
// };

// const fetchPost = (user) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = false;
//       if (error) {
//         reject({ message: "posts fetch failed" });
//       } else {
//         resolve([
//           { id: 1, userId: user.id, title: "post 1" },
//           { id: 2, userId: user.id, title: "post 2" },
//         ]);
//       }
//     }, 1000);
//   });
// };

// const fetchComments = (post) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let error = true;
//       if (error) {
//         reject({ message: "comments fetch failed" });
//       } else {
//         resolve([
//           { id: 1, userId: post.userId, title: "comment 1" },
//           { id: 2, userId: post.userId, title: "comment 2" },
//         ]);
//       }
//     }, 1000);
//   });
// };

// //! handling promise
// // const userPromise = fetchUser();
// // fetchUser()
// //   .then((user) => {
// //     console.log(user);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // fetchPost({ id: 1 })
// //   .then((posts) => {
// //     console.log(posts);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// //! promise chaining
// // fetchUser()
// //   .then((user) => {
// //     console.log(user);
// //     fetchPost()
// //       .then((posts) => {
// //         console.log(posts);
// //         fetchComments(posts[0])
// //           .then((cmts) => {
// //             console.log(cmts);
// //           })
// //           .catch((err) => {
// //             console.log(err);
// //           });
// //       })
// //       .catch((error) => {
// //         console.log(error);
// //       });
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// fetchUser()
//   .then((user) => {
//     console.log(user);
//     return fetchPost(user);
//   })

//   .then((posts) => {
//     console.log(posts);
//     return fetchComments(posts[0]);
//   })
//   .then((comments) => {
//     console.log(comments);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //!promise chain
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//  .then((response)=>{
//   console.log(response);
//    return response.json()
//  })
//  .then((data)=>{
//   console.log(data);
  
//  })
//  .catch((err)=>{
//   console.log(err);
  
//  });
// // console.log(response);

//! async/await

// //async
// // const add = async()=>{};

// //add();
// const fetchData =async ()=>{
//   const user = await fetchUser();
//   console.log(user);
  
//   const posts= await fetchpost(user);
// console.log(posts);
// const comment=await fetchcomments(posts[0])
// console.log(comment);

// };
// fetchData();

// console.log("end");

// const fetchData = async () => {
//   try {
//     const user = await fetchUser();
//     console.log("User:", user);

//     const posts = await fetchpost(user);
//     console.log("Posts:", posts);

//     // check if posts exist and not empty
//     if (!posts || posts.length === 0) {
//       throw new Error("No posts found");
//     }

//     const comment = await fetchcomments(posts[0]);
//     console.log("Comment:", comment);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// };

// fetchData();

// console.log("end");

// const fetchData = async () => {
//   try {
//     const user = await fetchUser();
//     console.log("User:", user);

//     const posts = await fetchpost(user);
//     console.log("Posts:", posts);

//     const comment = await fetchcomments(posts[0]);
//     console.log("Comment:", comment);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
// };

// fetchData();

// console.log("end");

// define functions FIRST
// const fetchUser = async () => {
//   return { id: 1, name: "Niru" };
// };

// const fetchpost = async (user) => {
//   return [
//     { id: 101, title: "Post 1", userId: user.id }
//   ];
// };

// const fetchcomments = async (post) => {
//   return { id: 5001, text: "Nice post!", postId: post.id };
// };


// // main function
// const fetchData = async () => {
//   try {
//     const user = await fetchUser();
//     console.log("User:", user);
//       const error = new  error("new error");
//       if (error){
//             throw error;
//       }
//     console.log(error);
    

//     const posts = await fetchpost(user);
  
//     console.log("Posts:", posts);

//     const comment = await fetchcomments(posts[0]);
//     console.log("Comment:", comment);

//   } catch (error) {
//     console.log("Error:", error.message);
//   }
//   finally{
//     console.log("finally");
    
//   }
// };

// fetchData();


// console.log("end");


//   } catch (error) {
//     console.log("Error:", error.message);
//   } finally {
//     console.log("Finished fetching comments");
//   }
// };

// fetchComments();

// console.log("End");