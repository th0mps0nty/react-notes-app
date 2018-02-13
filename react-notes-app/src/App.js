import React, { Component } from 'react';
import logo from './logo.svg';
import Note from './Note/Note';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

// We're going to setup the React state of our component
    this.state = {
      notes: [
        { id: 1, noteContent: "Note 1 here!" },
        { id: 2, noteContent: "Note 2 here!" },
      ],
    }
  }

  render() {
    return (
      <div className="notesWrapper">
        <div className="notesHeader">
          <div className="heading">React & Firebase To-Do List</div>
        </div>
        <div className="notesBody">
        {
          this.state.notes.map((note) => {
            return (
              <Note noteContent={note.noteContent} noteId={note.Id} key={note.Id} />
            )
          })
        }
        </div>
        <div className="notesFooter">
          Footer Will Go Here...
        </div>
      </div>
    );
  }
}

export default App;
