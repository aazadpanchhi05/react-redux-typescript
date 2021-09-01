import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { InputNote } from './InputNote';
import { NotesState } from './noteReducers';

function App() {

  const notes = useSelector<NotesState, NotesState['notes']>(state => state.notes);


  const dispatch = useDispatch();

  const onAddNote = (note: string) => {
    dispatch({ type: 'ADD_NOTE', payload: note })
  }

  return (
    <>
      <InputNote addNote={onAddNote} />
      <br />
      <br />
      <ul>
        {notes.map(n => {
          return (
            <>
              <li key={n}>{n}</li>
            </>
          )
        })}
      </ul>
    </>
  );
}

export default App;
