import { useEffect, useState } from "react";
import fetchBooks from "./api-client";

function useBooks(initialQuery) {
  //url: https://www.googleapis.com/books/v1/volumes?q=javascript
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialQuery);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBookData(query) {
      setLoading(true);
      try {
        const items = await fetchBooks(query, controller);
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

    // return () => {
    //   controller.abort(); // Cleanup function to abort the fetch request
    // };
  }, [searchTerm]);

  return { books, loading, setSearchTerm };
}

export default useBooks;
