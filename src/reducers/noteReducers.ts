import { NoteDispatchTypes } from '../actions/ActionTypes';

export interface NotesState {
    notes: string[]
}

const init = {
    notes: []
}

export const noteReducers = (state: NotesState = init, action: NoteDispatchTypes): NotesState => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { ...state, notes: [...state.notes, action.payload] }
        case 'REMOVE_NOTE':
            return {...state, notes : state.notes.filter(x => x !== action.payload)}
        default:
            return state;
    }
}

// state.cartItems.filter(x => x.product !== action.payload)