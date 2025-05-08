function BookCard({ book, onSeeMore }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100">
        <img
          className="card-img-top"
          src={book.volumeInfo.imageLinks?.thumbnail}
          alt={book.volumeInfo.title}
        />
        <div className="card-body">
          <h5 className="card-title">{book.volumeInfo.title}</h5>
          <p className="card-text">{book.volumeInfo.authors?.join(", ")}</p>
          <button onClick={() => onSeeMore(book)} className="btn btn-primary">See More</button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;
