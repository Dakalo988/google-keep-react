import React, { useState } from "react";

// Note.js
const Note = (props) => {
  // console.log(useSatate(props.title));
  const [title, setTitle] = useState(props.title);
  const [text, setText] = useState(props.text);

  const noteClickHandler = () => {
    setTitle("change the title");
    setText("change the text");
  };
  return (
    <div>
      <div className="note" id="$note.id" onClick={noteClickHandler}>
        <span className="material-icons check-circle">check_circle</span>
        <div className="title">{title}</div>
        <div className="text">{text}</div>
        <div class="note-footer">
          <div class="tooltip">
            <span class="material-icons-outlined hover small-icon">
              add_alert
            </span>
            <span class="tooltip-text">Remind me</span>
          </div>
          <div class="tooltip">
            <span class="material-icons-outlined hover small-icon">
              person_add
            </span>
            <span class="tooltip-text">Collaborator</span>
          </div>
          <div class="tooltip">
            <span class="material-icons-outlined hover small-icon">
              palette
            </span>
            <span class="tooltip-text">Change Color</span>
          </div>
          <div class="tooltip">
            <span class="material-icons-outlined hover small-icon">image</span>
            <span class="tooltip-text">Add Image</span>
          </div>
          <div class="tooltip archive">
            <span class="material-icons-outlined hover small-icon">
              archive
            </span>
            <span class="tooltip-text">Archive</span>
          </div>
          <div class="tooltip">
            <span class="material-icons-outlined hover small-icon">
              more_vert
            </span>
            <span class="tooltip-text">More</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Note;
