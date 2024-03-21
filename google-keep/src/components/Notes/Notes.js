import "./Notes.css";
import Note from "./Note";

const Notes = (props) => {
  const { notes, deleteNote, toggleModal, setSelectedNote } = props;
  return (
    <div className="notes">
      {notes.length === 0 ? (
        <p>Notes you add appear here.</p>
      ) : (
        notes.map((note, index) => (
          <Note
            key={index}
            note={note}
            deleteNote={deleteNote}
            toggleModal={toggleModal}
            setSelectedNote={setSelectedNote}
          />
        ))
      )}
    </div>
  );
};

export default Notes;
