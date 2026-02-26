// sync => blocking
// async => non blocking

const add = (a, b) => {
  console.log(a + b);
};
// add(12);
// add(12,45);

//! setTimeout
// setTimeout(callback,timeout)

console.log("start");
// const timerId = setTimeout(
//   (name, age, c) => {
//     console.log(name, age, c);
//     console.log("processing");
//   },
//   1000,
//   "John",
//   27,
//   34,
// );
// console.log(timerId);

// clearTimeout(timerId); // clear timer
// console.log(timerId);

//! setInterval
// // setInterval(callback,interval)
// let count = 0;
// const timerId = setInterval(() => {
//   console.log(count);
//   //   console.log("processing");
//   if (count === 10) {
//     clearInterval(timerId);
//   }
//   count += 1;
// }, 1000);

//  fetchUser
const fetchUser = (callback) => {
  setTimeout(() => {
    // callback({ message: "User fetch failed" });
    callback(null, { name: "John", id: 1 });
  }, 2000);
};

const fetchPost = (user, callback) => {
  setTimeout(() => {
    console.log(user);
    console.log("users post fetched for user", user.id);
    callback(null, [
      { id: 1, userId: user.id, title: "post 1" },
      { id: 2, userId: user.id, title: "post 2" },
    ]);
  }, 1000);
};

const fetchComments = (post, callback) => {
  setTimeout(() => {
    callback(null, [{ postId: post.id, id: 1, content: "comment 1" }]);
  }, 3000);
};

//  (err,data)

fetchUser((err, user) => {
  if (err) {
    console.log(err);
    return;
  }
  fetchPost(user, (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
    // fetch comments
    fetchComments(data[0], (err, comments) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Comments fetched");
      console.log(comments);
    });
  });
});

console.log("end");

// callback hell   => promise / async await
// pyramid of doom