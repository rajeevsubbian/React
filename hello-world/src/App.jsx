import "./App.css";

function App() {
  const bookName = "Effective Jave";
  const author = "Joshua Bloch";
  const description =
    "Effective Java is a programming book that provides best practices for writing high-quality Java code.";

  return (
    <div className="App">
      <Book title={bookName} author={author} description={description} />
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
      <h2>{props.title}</h2>
      <h3>by {props.author}</h3>
      <p>{props.description}</p>
    </div>
  );
}
