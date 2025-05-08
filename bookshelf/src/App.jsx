import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import BookList from "./components/BookList";
import fetchBooks from "./services/api-client";

function App() {
  //url: https://www.googleapis.com/books/v1/volumes?q=javascript
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Python");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchData();
    // console.log("BOOKS::", books);
  }, [searchTerm]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const items = await fetchBooks(searchTerm);
      setBooks(items);
      setLoading(false);
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Failed to fetch books:", error);
      }
    } finally {
      setLoading(false);
    }
    // const res = await fetch(
    //   `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    // );
    // const data = await res.json();

    // console.log("BOOKS fetched:", data.items); // ✅ this logs the correct books
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
