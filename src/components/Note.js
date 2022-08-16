import { MdClose } from "react-icons/md";

const Note = ({ note, onDelete, onToggle }) => {
    return (
        <div className={note.active ? "Note__active" : "Note"}>
            <div
                className="Note__header"
                onDoubleClick={() => onToggle(note.id)}
            >
                <h3>{note.title}</h3>
                <MdClose
                    className="Note__close"
                    onClick={() => onDelete(note.id)}
                />
            </div>
            <p>{note.body}</p>
        </div>
    );
};

export default Note;
