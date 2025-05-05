import Book from "./components/Book";
import UserProfile from "./components/UserProfile";
import { booksData } from "./components/data";
import "./App.css";
import RandomQuote from "./components/quotes_app/components/RandomQuote";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
// import books from "./components/data";
import NameForm from "./components/Forms";
import GroceryList from "./components/grocery_list/components/GroceryList";
import GroceryNav from "./components/grocery_list/components/GroceryNav";
import GroceryFooter from "./components/grocery_list/components/GroceryFooter";
import GroceryForm from "./components/grocery_list/components/GroceryForm";

function App() {
  const [groceriesItems, setGroceriesItems] = useState([]);
  const [groceryInput, setGroceryInput] = useState("");
  function handleOnChange(e) {
    setGroceryInput(e.target.value);
  }

  function handleOnSubmit(e) {
    e.preventDefault();
    if (!groceryInput.trim()) return;
    const newGrocery = {
      id: Date.now(),
      text: groceryInput,
      bought: false,
    };
    setGroceriesItems([newGrocery, ...groceriesItems]);
    setGroceryInput("");
  }

  function toggleBought(id) {
    const updatedItems = groceriesItems.map((item) => {
      if (item.id === id) {
        console.log(
          `Toggling item ${id}: currently ${
            item.bought ? "bought" : "not bought"
          }`
        );
        return { ...item, bought: !item.bought };
      }
      return item;
    });
    setGroceriesItems(updatedItems);
  }
  // const groceries = [
  //   { id: Date.now(), text: "Apples", bought: false },
  //   { id: Date.now(), text: "Pear", bought: false },
  //   { id: Date.now(), text: "Bananas", bought: false },
  // ];
  return (
    <div className="container pt-2">
      <GroceryNav />
      <GroceryForm
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        item={groceryInput}
      />
      <GroceryList items={groceriesItems} handleOnToggle={toggleBought} />
      <GroceryFooter />
    </div>
  );
}

// function App() {
//   return (
//     <div className="container pt-2">
//       <NameForm />
//     </div>
//   );
// }

// function App() {
//   const [quote, setQuote] = useState("");
//   const [color, setColor] = useState("bg-dark");

//   const quotes = [
//     {
//       author: "Albert Einstein",
//       content:
//         "Life is like riding a bicycle. To keep your balance, you must keep moving.",
//     },
//     {
//       author: "Isaac Newton",
//       content:
//         "If I have seen further it is by standing on the shoulders of Giants.",
//     },
//     {
//       author: "Marie Curie",
//       content: "Be less curious about people and more curious about ideas.",
//     },
//     {
//       author: "Leonardo da Vinci",
//       content: "Learning never exhausts the mind.",
//     },
//     {
//       author: "Aristotle",
//       content: "The more you know, the more you realize you don't know.",
//     },
//   ];

//   function getRandomQuote() {
//     const randomIndex = Math.floor(Math.random() * quotes.length);
//     setQuote(quotes[randomIndex]);
//     setColor(getRandomColor());

//     console.log(quotes[randomIndex]);
//   }

//   function getRandomColor() {
//     const colors = [
//       "bg-secondary",
//       "bg-success",
//       "bg-danger",
//       "bg-warning",
//       "bg-info",
//       //   "bg-light",
//       "bg-dark",
//     ];
//     return colors[Math.floor(Math.random() * colors.length)];
//   }

//   return (
//     <div className="App">
//       <RandomQuote quote={quote} color={color} onChangeQuote={getRandomQuote} />
//       {/* <UserProfile
//         name="Rajeev Subbian"
//         email="rajeev.s@email.com"
//         bio="Software Engineer"
//       />
//       {booksData.items.map((book, index) => (
//         <Book
//           key={index}
//           title={book.volume.title}
//           author={book.volume.authors}
//           description={book.volume.description}
//           subtitle={book.volume.subtitle}
//           image={book.volume.image}
//         />
//       ))} */}
//       {/* <Book
//         title={books[0].title}
//         author={books[0].author}
//         description={books[0].description}
//       /> */}
//       {/* <HelloWorld /> */}
//     </div>
//   );
// }

export default App;

// function HelloWorld() {
//   return <p>Hello World, Rajeev !</p>;
// }

// function Book({ title, author, description }) {
//   // console.log(props);
//   return (
//     <div>
//       <h2>Title: {title}</h2>
//       <h3>by {author}</h3>
//       <p>Description: {description}</p>
//     </div>
//   );
// }
