import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const textChangeHandler = (event) => {
    setText(event.target.value);
  };

  const submitFormHandler = (event) => {
    event.preventDefault();
    setTitle("");
    setText("");
  };

  return (
    <div>
      {/*<div className="form-container inactive-form">
        <form>
          <input
            onChange={(event) => console.log(event.target.value)}
            type="text"
            className="note-text"
            placeholder="Takenotes"
          />
          <div className="form-actions">
            <div className="tooltip">
              <span className="material-icons-outlined hover">check_box</span>
              <span className="tooltip-text">New List</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">brush</span>
              <span className="tooltip-text">New Drawing</span>
            </div>
            <div className="tooltip">
              <span className="material-icons-outlined hover">image</span>
              <span className="tooltip-text">New Image</span>
            </div>
          </div>
        </form>
  </div>*/}

      <div className="form-container active-form">
        <form onSubmit={submitFormHandler} className="form" id="form">
          <input
            onChange={titleChangeHandler}
            value={title}
            id="note-title"
            type="text"
            className="note-title"
            placeholder="Title"
          />
          <input
            onChange={textChangeHandler}
            value={text}
            id="note-text"
            className="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div className="form-actions">
            <div className="icons">
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  add_alert
                </span>
                <span className="tooltip-text">Remind me</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  person_add
                </span>
                <span className="tooltip-text">Collaborator</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  palette
                </span>
                <span className="tooltip-text">Change Color</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  image
                </span>
                <span className="tooltip-text">Add Image</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  archive
                </span>
                <span className="tooltip-text">Archive</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  more_vert
                </span>
                <span className="tooltip-text">More</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  undo
                </span>
                <span className="tooltip-text">Undo</span>
              </div>
              <div className="tooltip">
                <span className="material-icons-outlined hover small-icon">
                  redo
                </span>
                <span className="tooltip-text">Redo</span>
              </div>
            </div>
            <button className="close-btn">Close</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Form;
