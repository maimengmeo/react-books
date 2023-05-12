import BookShow from "./BookShow";

function BookList({ books }) {
    const renderedBooks = books.map((book) => {
        return (
            <div>
                <BookShow book={book} key={book.id} />
            </div>
        );
    });
    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
