import { useState, useEffect } from "react";
const DataFetcher = () => {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(false);
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => setData(json));
    }, [refresh]); 
    //here i was getting an error of infinite loop..because the the fectch method will 
    //continously fetch the data and and the because of *useEffect, it will keep on re-rendering.
    //Now, `refresh` is used as a dependency, so the fetch request only runs when  
    //`refresh` changes, 

  
    return (
      <div>
        <h2>Posts</h2>
        <button onClick={() => setRefresh(!refresh)}>Refresh</button>
        <ul>
          {data.slice(0, 5).map((post) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </div>
    );
  };
  export default DataFetcher;