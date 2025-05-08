import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import BookList from "./components/BookList";

function App() {
  //url: https://www.googleapis.com/books/v1/volumes?q=javascript
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Python");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBooks();
    // console.log("BOOKS::", books);
  }, [searchTerm]);

  const fetchBooks = async () => {
    setLoading(true);
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const data = await res.json();
    setBooks(data.items || []);
    setLoading(false);
    console.log("BOOKS fetched:", data.items); // ✅ this logs the correct books
  };

  function handleSearch(query) {
    setSearchTerm(query);
  }

  return (
    <>
      <NavBar onSearch={handleSearch} />
      {loading ? (
        <p className="display-3">Loading</p>
      ) : (
        <BookList books={books} />
      )}
      <Footer />
    </>
  );
}

export default App;
