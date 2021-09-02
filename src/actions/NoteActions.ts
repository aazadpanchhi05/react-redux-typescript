import { Dispatch } from "redux";
import { ADD_NOTE, NoteDispatchTypes, REMOVE_NOTE } from './ActionTypes';

export const addNote = (note: string) => async (dispatch: Dispatch<NoteDispatchTypes>) => {
    dispatch({ type: ADD_NOTE, payload: note });
}

export const removeNote = (note: string) => async (dispatch: Dispatch<NoteDispatchTypes>) => {
    dispatch({ type: REMOVE_NOTE, payload: note });
}