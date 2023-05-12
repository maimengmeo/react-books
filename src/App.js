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

    return (
        <div>
            <BookList books={books} onDelete={deleteBook} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
