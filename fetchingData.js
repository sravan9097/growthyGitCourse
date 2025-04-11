async function fetchData() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
  
      // Log titles of the first 5 posts
      console.log("Titles of the first 5 posts:");
      data.slice(0, 5).forEach((post, index) => {
        console.log(`${index + 1}. ${post.title}`);
      });
  
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  
  fetchData();
  