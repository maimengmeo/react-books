import { useEffect } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBookContext from "./hooks/use-books-context";

function App() {
    const { fetchBooks } = useBookContext();

    useEffect(() => {
        fetchBooks();
    }, []); //second arg decide when the arrow function called, [] mean only rerender 1st time

    return (
        <div className="app">
            <h1>Reading List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
