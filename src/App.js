import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
    const [books, setBooks] = useState([]);

    const deleteBook = (id) => {
        const updateBooks = books.filter((book) => {
            return book.id !== id;
        });
        setBooks(updateBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            { id: Math.round(Math.random() * 9999), title },
        ];
        setBooks(updatedBooks);
    };

    const editBookById = (id, newTitle) => {
        const updateBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle };
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
