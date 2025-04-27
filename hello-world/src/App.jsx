import "./App.css";

function App() {
  const books = [
    {
      id: 1,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel.",
    },
    {
      id: 2,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel set in the Jazz Age.",
    },
  ];

  return (
    <div className="App">
      <Book
        title={books[0].title}
        author={books[0].author}
        description={books[0].description}
      />
      {/* <HelloWorld /> */}
    </div>
  );
}

export default App;

// function HelloWorld() {
//   return <p>Hello World, Rajeev !</p>;
// }

function Book(props) {
  console.log(props);
  return (
    <div>
      <h2>Title: {props.title}</h2>
      <h3>by {props.author}</h3>
      <p>Description: {props.description}</p>
    </div>
  );
}
