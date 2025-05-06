import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  //url: https://www.googleapis.com/books/v1/volumes?q=javascript
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("Python");

  useEffect(() => {
    fetchBooks();
    // console.log("BOOKS::", books);
  }, [query]);

  const fetchBooks = async () => {
    const res = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${query}`
    );
    const data = await res.json();
    setBooks(data.items || []);
    console.log("BOOKS fetched:", data.items); // ✅ this logs the correct books
  };

  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
}

export default App;
