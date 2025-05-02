import Book from "./components/Book";
import UserProfile from "./components/UserProfile";
import { booksData } from "./components/data";
import "./App.css";
import RandomQuote from "./components/quotes_app/components/RandomQuote";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <RandomQuote />
      {/* <UserProfile
        name="Rajeev Subbian"
        email="rajeev.s@email.com"
        bio="Software Engineer"
      />
      {booksData.items.map((book, index) => (
        <Book
          key={index}
          title={book.volume.title}
          author={book.volume.authors}
          description={book.volume.description}
          subtitle={book.volume.subtitle}
          image={book.volume.image}
        />
      ))} */}
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
