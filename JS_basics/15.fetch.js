// // https://jsonplaceholder.typicode.com/posts/1/comments
// // 'https://jsonplaceholder.typicode.com/comments?postID=1

// // const fetchComments = async () => {
// //   try {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
// //     const comments = await response.json();
// //     console.log("Comments:", comments);
// //   } catch (error) {
// //     console.log("Error:", error.message);
// //   } finally {
// //     console.log("Finished fetching comments");
// //   }
// // };

// // fetchComments();

// // // console.log("End");
// // const fetchComments = async () => {
// //   try {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
// //     const comments = await response.json();
// //     console.log("Comments:", comments);
// //   } catch (error) {
// //     console.log("Error:", error.message);
// //   } finally {
// //     console.log("end");
// //   }
// // };

// const fetchComments = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts/1/comments');
//     const comments = await response.json();
//     console.log("Comments fetched!");
//     console.log(comments.slice(0, 2)); // first 2 comments dekhauna
//   } catch (error) {
//     console.log("Error:", error.message);
//   } finally {
//     console.log("Finished fetching comments");
//   }
// };

// fetchComments();
// console.log("End of script");

// https://jsonplaceholder.typicode.com/posts?userId=1
// 	https://jsonplaceholder.typicode.com/comments?postId=1
// fetch

// fetchPosts
const fetchPosts = async (userId) => {
  try {
    const postRes = await fetch(
      `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    );
    const posts = await postRes.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
};

// fetchComments
const fetchComments = async (postId) => {
  try {
    const commentsRes = await fetch(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
    );
    const comments = await commentsRes.json();
    return comments;
  } catch (error) {
    console.log(error);
  }
};

// fetch data

const fetchData = async () => {
  try {
    // fetch post
    const posts = await fetchPosts(1);
    // fetch comments
    const comments = await fetchComments(posts[1].id);

    console.log(comments);
  } catch (error) {
    console.log(error);
  }
};

fetchData();