function Book({ title, author, description, subtitle, image }) {
  // console.log(props);
  return (
    <div className="user-profile">
      <img src={image} alt={title} />
      <h2>Title: {title}</h2>
      <h4>Subtitle: {subtitle}</h4>
      <h3>by {author}</h3>
      <p>Description: {description}</p>
    </div>
  );
}

export default Book;
