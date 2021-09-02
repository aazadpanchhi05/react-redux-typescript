export const ADD_NOTE = 'ADD_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export interface AddNote {
    type: typeof ADD_NOTE,
    payload: string
}

export interface RemoveNote {
    type: typeof REMOVE_NOTE,
    payload: string
}

export type NoteDispatchTypes = AddNote | RemoveNote;
