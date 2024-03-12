import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Form/Form";
import Modal from "./components/Modal/Modal";
import Notes from "./components/Notes/Notes";

function App() {
  const notes = [
    {
      id: "a123",
      title: "Example tilte1",
      text: "Example text1",
    },

    {
      id: "a124",
      title: "Example tilte2",
      text: "Example text2",
    },

    {
      id: "a125",
      title: "Example tilte3",
      text: "Example text3",
    },
  ];
  return (
    <div>
      <Navbar />
      <Sidebar />
      <Form />
      <Modal />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
