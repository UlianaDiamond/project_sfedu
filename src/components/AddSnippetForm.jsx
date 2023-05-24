import React, { useState } from "react";
import '../styles/AddSnippet.css';
import SnippetsTable from "./SnippetTable";

function AddSnippetForm(props) {

    const [formData, setFormData] = useState({
        title: props.snippet ? props.snippet.title : "",
        description: props.snippet ? props.snippet.description : "",
        creationDate: props.snippet ? props.snippet.creationDate : "",

    });

    const [title, setTitle] = useState(formData.title);
    const [description, setDescription] = useState(formData.description);
    const [creationDate, setCreationDate] = useState(formData.creationDate);
    const [show, setShow] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newSnippet = { ...formData };
        props.onSave(newSnippet);
        fetch("/api/snippets", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newSnippet),
        })
            .then((response) => response.json())
            .then((data) => {
                props.addSnippet(data);
                setFormData({
                    title: "",
                    description: "",
                    creationDate: "",

                });
            })
            .catch((error) => console.error(error));
    };

    const handleShow = () => {
        setShow(!show);
        window.location.reload();
    }
    return (

        show ? (<SnippetsTable />) : (
            <div className="container">
                <form onSubmit={handleSubmit}>
                    <div className="form-header">Snippet</div>
                    <div className="form-body">
                        <div className="information">
                            <label htmlFor="title">Title:</label>
                            <input
                                className="form-input"
                                type="text"
                                id="title"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                            <br />
                        </div>
                        <div className="information">
                            <label htmlFor="description">Description:</label>
                            <input
                                className="form-input"
                                type="text"
                                id="description"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <br />
                        </div>
                        <div className="information">
                            <label htmlFor="creationDate">Creation Date:</label>
                            <input
                                className="form-input"
                                type="date"
                                id="creationDate"
                                value={creationDate}
                                onChange={(event) => setCreationDate(event.target.value)}
                            />
                            <br />
                        </div>
                    </div>
                    <div className="form-footer">
                        <button className="save" type="submit" onClick={handleShow}>
                            Save
                        </button>
                    </div>
                </form>
            </div>
        )
    );
}

export default AddSnippetForm;