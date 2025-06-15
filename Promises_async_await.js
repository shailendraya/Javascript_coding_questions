
// console.log('fetch start')
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(posts => {
//     // Do something with the posts data
//     console.log(posts[0].userId);
//   })
//   .catch(error => {
//     console.error(error);
//   });
//   console.log('fetch end')

  
  async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const posts = await response.json();
      // Do something with the posts data
      console.log(posts[0].userId);
    } catch (error) {
      console.error(error);
    }
  }
  
  console.log('async await start')
  fetchData();
  console.log('async await end')

  