import { useState, useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    useEffect(() => {
        fetchBooks();
    }, []); //second arg decide when the arrow function called, [] mean only rerender 1st time

    const deleteBook = async (id) => {
        await axios.delete(`http://localhost:3001/books/${id}`);
        const updateBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updateBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post("http://localhost:3001/books", {
            title,
        });

        const updatedBooks = [...books, response.data];
        setBooks(updatedBooks);
    };

    const editBookById = async (id, newTitle) => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {
            title: newTitle,
        });

        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, ...response.data }; //...response.data: take all the different data, put it in to the book obj
            }
            return book;
        });
        setBooks(updateBooks);
    };

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList
                books={books}
                onDelete={deleteBook}
                onEdit={editBookById}
            />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
