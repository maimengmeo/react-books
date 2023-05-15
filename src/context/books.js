import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();
function Provider({ children }) {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get("http://localhost:3001/books");
        setBooks(response.data);
    };

    const deleteBookById = async (id) => {
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

    const valueToShare = {
        //key and value are the same so can be just 1
        books,
        deleteBookById,
        editBookById,
        createBook,
        fetchBooks,
    };

    return (
        <BooksContext.Provider value={valueToShare}>
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
