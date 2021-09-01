import React from 'react'
import { useState } from 'react'

interface Props {
    addNote(note: string): void;
}

export const InputNote:  React.FC<Props> = ({addNote}) => {

    const [note, setNote] = useState('');

    const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNote(e.target.value);
        // console.log(e.target.value);
    }

    const AddNote = () => {
        addNote(note);
        setNote('');
    }

    return (
        <div>
            <input value={note} onChange={updateNote} name='note' placeholder='Note' type='text'/>
            <button onClick={AddNote}>Add Note</button>
        </div>
    )
}
