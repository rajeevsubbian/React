function Book({ title, author, description }) {
  // console.log(props);
  return (
    <div>
      <h2>Title: {title}</h2>
      <h3>by {author}</h3>
      <p>Description: {description}</p>
    </div>
  );
}

export default Book;
