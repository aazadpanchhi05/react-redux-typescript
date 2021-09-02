import { applyMiddleware, createStore } from 'redux';
import { noteReducers } from './reducers/noteReducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export const store = createStore(noteReducers, composeWithDevTools(applyMiddleware(thunk)));
export type RootStore = ReturnType<typeof noteReducers>;