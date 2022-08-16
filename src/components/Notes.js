import Note from "./Note";

const Notes = ({ notes, onDelete, onToggle }) => {
    return (
        <>
            {notes.map((note) => (
                <Note note={note} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    );
};

export default Notes;
