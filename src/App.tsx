import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNote, removeNote } from './actions/NoteActions';
import './App.css';
import { InputNote } from './InputNote';
// import { NotesState } from './reducers/noteReducers';
import {RootStore} from './store';

function App() {

  const notes = useSelector( (state: RootStore) => state.notes );

  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch(addNote(note));
  }

  const handleDelete = (n: string) => {
    // const index = notes.indexOf(n);
    // notes.splice(index, 1);
    // // console.log(notes);
    dispatch(removeNote(n));
  }

  return (
    <div  style={{margin: '50px'}}>
      <InputNote addNote={onAddNote} />
      <br />
      <br />
      <ul>
        {notes.map(n => {
          return (
            <>
              <li key={n}>
                <span>{n}</span>
                <button 
                  onClick={() => handleDelete(n)}
                  style={{
                    backgroundColor: '#f44336',
                    border: 'none',
                    color: 'white',
                    padding: '7px 10px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: '12px',
                    margin: '7px'
                  }}
                  >Delete</button>
              </li>
            </>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
