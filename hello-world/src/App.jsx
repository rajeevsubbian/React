import Book from "../components/Book";
import UserProfile from "../components/UserProfile";
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
      <UserProfile
        name="Rajeev Subbian"
        email="rajeev.s@email.com"
        bio="Software Engineer"
      />
      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          description={book.description}
        />
      ))}
      {/* <Book
        title={books[0].title}
        author={books[0].author}
        description={books[0].description}
      /> */}
      {/* <HelloWorld /> */}
    </div>
  );
}

export default App;

// function HelloWorld() {
//   return <p>Hello World, Rajeev !</p>;
// }

// function Book({ title, author, description }) {
//   // console.log(props);
//   return (
//     <div>
//       <h2>Title: {title}</h2>
//       <h3>by {author}</h3>
//       <p>Description: {description}</p>
//     </div>
//   );
// }
