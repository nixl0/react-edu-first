import { useState } from "react";
import AddNote from "./components/AddNote";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
    const [showAddNote, setShowAddNote] = useState(false);

    const [notes, setNotes] = useState([
        {
            id: 1,
            title: "note 1",
            body: "lorem ipsum",
            active: false,
        },
        {
            id: 2,
            title: "note 2",
            body: "lorem ipsum",
            active: false,
        },
        {
            id: 3,
            title: "note 3",
            body: "lorem ipsum",
            active: false,
        },
    ]);

    const addNote = (note) => {
        let id = 1;
        notes.forEach((note) => {
            if (id <= note.id) {
                id = note.id + 1;
            }
        });

        const newNote = { id, ...note };
        setNotes([...notes, newNote]);
    };

    const deleteNote = (id) => {
        // console.log(`delete`, id);
        setNotes(notes.filter((note) => note.id !== id));
    };

    const toggleNote = (id) => {
        setNotes(
            notes.map((note) =>
                note.id === id ? { ...note, active: !note.active } : note
            )
        );
    };

    return (
        <div className="App">
            <Header title="Notes" onAdd={() => setShowAddNote(!showAddNote)} />
            {showAddNote && <AddNote onAdd={addNote} />}
            {notes.length > 0 ? (
                <Notes
                    notes={notes}
                    onDelete={deleteNote}
                    onToggle={toggleNote}
                />
            ) : (
                <p>no notes</p>
            )}
        </div>
    );
}

export default App;
