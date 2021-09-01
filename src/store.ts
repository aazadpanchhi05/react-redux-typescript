import { createStore } from 'redux';
import { noteReducers } from './noteReducers';

export const store = createStore(noteReducers);