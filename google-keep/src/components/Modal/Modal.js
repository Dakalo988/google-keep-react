import "./Modal.css";

function Modal() {
  return (
    <div class="modal">
      <div class="modal-content">
        <div class="form-container">
          <form class="form" id="modal-form" />
          <input
            id="modal-title"
            type="text"
            class="note-title"
            placeholder="Title"
          />
          <input
            id="modal-text"
            class="note-text"
            type="text"
            placeholder="Take a note..."
          />
          <div class="form-actions">
            <div class="icons">
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
                <span class="material-icons-outlined hover small-icon">
                  image
                </span>
                <span class="tooltip-text">Add Image</span>
              </div>
              <div class="tooltip">
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
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  undo
                </span>
                <span class="tooltip-text">Undo</span>
              </div>
              <div class="tooltip">
                <span class="material-icons-outlined hover small-icon">
                  redo
                </span>
                <span class="tooltip-text">Redo</span>
              </div>
            </div>
            <button class="close-btn" id="modal-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
