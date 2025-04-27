import "./App.css";

function App() {
  return (
    <div className="App">
      <Book />
      {/* <HelloWorld /> */}
    </div>
  );
}

export default App;

// function HelloWorld() {
//   return <p>Hello World, Rajeev !</p>;
// }

function Book() {
  const bookName = "Effective Jave"
  const author = "Joshua Bloch"
  const description = "Effective Java is a programming book that provides best practices for writing high-quality Java code. It covers topics such as object creation, methods, and concurrency, and is widely regarded as a must-read for Java developers."
  return (
    <div>
      <h2>Book title : {bookName}</h2>
      <h3>By Author : {author}</h3>
      <p>Book description : {description}</p>
    </div>
  );
}