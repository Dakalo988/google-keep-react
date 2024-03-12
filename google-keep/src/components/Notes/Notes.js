import "./Notes.css";
import Note from "./Note";

export default function Notes(props) {
  return (
    <div class="notes">
      <Note
        id={props.notes[0].id}
        title={props.notes[0].title}
        text={props.notes[0].text}
      />
      <Note
        id={props.notes[1].id}
        title={props.notes[1].title}
        text={props.notes[1].text}
      />
      <Note
        id={props.notes[2].id}
        title={props.notes[2].title}
        text={props.notes[2].text}
      />
    </div>
  );
}
