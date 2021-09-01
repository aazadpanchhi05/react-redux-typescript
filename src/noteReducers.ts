export interface NotesState {
    notes: string[]
}

const init = {
    notes: []
}

type Action = { type: 'ADD_NOTE', payload: string }

export const noteReducers = (state: NotesState = init, action: Action) => {
    switch (action.type) {
        case 'ADD_NOTE':
            return { ...state, notes: [...state.notes, action.payload] }
        default:
            return state;
    }
}