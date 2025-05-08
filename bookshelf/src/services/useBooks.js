import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

function useBooks(initialQuery) {
  //url: https://www.googleapis.com/books/v1/volumes?q=javascript
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("initialQuery");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchBookData(query) {
      setLoading(true);
      try {
        const items = await fetchBooks(query);
        setBooks(items);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Failed to fetch books:", error);
        }
      } finally {
        setLoading(false);
      }
    }

    if (searchTerm) {
      fetchBookData(searchTerm);
    }
  }, [searchTerm]);

  return { books, loading, setSearchTerm };
}

export default useBooks;
