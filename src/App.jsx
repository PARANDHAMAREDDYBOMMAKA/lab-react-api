import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: "whatever-you-want" },
      })
      .then((res) => setBooks(res.data.books))
      .catch(() => {
        console.log("statusCode = 404");
        console.log("Website not found");
      });
  };

  useEffect(() => {
    getBooks();
  }, []);

  // console.log(books);

  return (
    <div className="App">
      {books.map((el, i) => (
        <div key={i}>
          <div>
            <h2>{el.title}</h2>
          </div>
          <div className="flex">
            <img src={el.imageLinks.thumbnail} alt={el.title} />
            <p>{el.description}</p>
          </div>
          <div className="author-names">
            {el.authors.map((el, i) => {
              return <h4 key={i}>{el}</h4>;
            })}
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
