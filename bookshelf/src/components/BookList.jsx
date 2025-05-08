import BookCard from "./BookCard";

function BookList({ books, onSeeMore }) {
  if (!books || books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div className="row">
      {books.map((book) => (
        <BookCard key={book.id} book={book} onSeeMore={onSeeMore} />
      ))}
    </div>
  );
}

export default BookList;
