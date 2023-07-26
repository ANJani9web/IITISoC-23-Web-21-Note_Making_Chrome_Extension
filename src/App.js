import React, { useEffect, useState } from "react";
import Top from "./top";
import NoteContainer from "./Components/NoteContainer/NoteContainer";
import Sidebar from "./Components/Sidebar/Sidebar";
import Search from './Search';

import "./App.css";

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes-app")) || []
  );
  const [searchText, setSearchText] = useState('');

  const addNote = (color) => {
    const tempNotes = [...notes];

    tempNotes.push({
      id: Date.now() + "" + Math.floor(Math.random() * 78),
      text: "",
      time: Date.now(),
      color,
    });
    setNotes(tempNotes);
  };

  const deleteNote = (id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes.splice(index, 1);
    setNotes(tempNotes);
  };

  const updateText = (text, id) => {
    const tempNotes = [...notes];

    const index = tempNotes.findIndex((item) => item.id === id);
    if (index < 0) return;

    tempNotes[index].text = text;
    setNotes(tempNotes);
  };

  useEffect(() => {
    localStorage.setItem("notes-app", JSON.stringify(notes));
  }, [notes]);

  return (
    <div>

      <div className="upper1">
        <Top/>
      </div>
      <div className="bg123">
      <div>
<Search handleSearchNote={setSearchText} />
      </div>
    
    <div className="App">
          <Sidebar addNote={addNote} />
      <NoteContainer
      notes={notes.filter((note) =>
        note.text.toLowerCase().includes(searchText)
      )}
        
        deleteNote={deleteNote}
        updateText={updateText}
      />
      </div>
      
      
    </div>
    </div>
  );
}

export default App;
