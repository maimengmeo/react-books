import { useState } from "react";
import BookCreate from "./components/BookCreate";

function App() {
    const [books, setBooks] = useState([]);

    const createBook = async (title) => {
        console.log("Book title: ", title);
    };

    return (
        <div>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
