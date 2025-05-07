import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  //url: https://www.googleapis.com/books/v1/volumes?q=javascript
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Python");

  useEffect(() => {
    fetchBooks();
    // console.log("BOOKS::", books);
  }, [searchTerm]);

  const fetchBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`
    );
    const data = await res.json();
    setBooks(data.items || []);
    console.log("BOOKS fetched:", data.items); // ✅ this logs the correct books
  };

  function handleSearch(query) {
    setSearchTerm(query);
  }

  return (
    <>
      <NavBar onSearch={handleSearch} />
      <Footer />
    </>
  );
}

export default App;
