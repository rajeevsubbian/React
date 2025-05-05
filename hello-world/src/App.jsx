import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // getData();

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const jsonData = await response.json();

      setData(jsonData);
      setIsLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="container pt-2">
      <DataFetching data={data} isLoading={isLoading} />
    </div>
  );
}

export default App;

function DataFetching({ data, isLoading }) {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
