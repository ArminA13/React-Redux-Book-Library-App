import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addBook } from "../../redux/books/actionCreators";
import "./BookForm.css";
import booksData from "../../data/books.json";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();

  const handleAddRandomBook = () => {
    const randomIndex = Math.floor(Math.random() * booksData.length + 1);
    const randomBook = booksData[randomIndex];
    const randomBookWithID = {
      ...randomBook,
      id: uuidv4(),
    };
    dispatch(addBook(randomBookWithID));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && author) {
      //dispatch action
      const book = {
        title: title,
        author: author,
        id: uuidv4(),
      };
      dispatch(addBook(book));
      setTitle("");
      setAuthor("");
    }
  };

  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            placeholder="Enter The Book Name"
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            type="text"
            value={author}
            placeholder="Enter The Auther Name"
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handleAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  );
};

export default BookForm;
