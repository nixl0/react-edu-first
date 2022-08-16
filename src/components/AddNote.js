import { useState } from "react";

const AddNote = ({ onAdd }) => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [active, setActive] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        if (!title) {
            alert("Add title");

            if (!body) {
                alert("Add body");
            }
        }

        onAdd({ title, body, active });

        setTitle("");
        setBody("");
        setActive(false);
    };

    return (
        <form className="AddNote" onSubmit={onSubmit}>
            <div className="AddNote__control">
                <label className="AddNote__control__label">Title</label>
                <input
                    type="text"
                    placeholder="Add title"
                    className="AddNote__control__input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                ></input>
            </div>
            <div className="AddNote__control">
                <label className="AddNote__control__label">Body</label>
                <textarea
                    placeholder="Add body"
                    className="AddNote__control__input"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
            </div>
            <div className="AddNote__control">
                <label className="AddNote__control__label">Active</label>
                <input
                    type="checkbox"
                    className="AddNote__control__input"
                    checked={active}
                    value={active}
                    onChange={(e) => setActive(e.currentTarget.checked)}
                ></input>
            </div>

            <input type="submit" value="Save note"></input>
        </form>
    );
};

export default AddNote;
