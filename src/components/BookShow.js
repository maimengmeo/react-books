import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onEdit }) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDeleteClick = () => {
        onDelete(book.id);
    };

    const handleEditClick = () => {
        setShowEdit(!showEdit);
    };

    const onSubmit = (id, newTitle) => {
        onEdit(id, newTitle);
        setShowEdit(false);
    };

    let content = <h3>{book.title}</h3>;
    if (showEdit) {
        content = <BookEdit book={book} onSubmit={onSubmit} />;
    }

    return (
        <div className="book-show">
            <img
                alt="book"
                src={`https://picsum.photos/seed/${book.id}/300/200`}
            />
            {content}

            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>

                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
