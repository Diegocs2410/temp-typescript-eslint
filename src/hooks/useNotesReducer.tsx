import { TaskType, NotesAction } from '../utils/types';

export const initialState = [] as TaskType[];

const notesReducer = (
  state = initialState,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { type, payload }: { type: string; payload: any }
) => {
  switch (type) {
    case NotesAction.GET_NOTES:
      return state;

    case NotesAction.ADD_NOTE:
      return [...state, payload];

    case NotesAction.DELETE_NOTE:
      return state.filter((note) => note.id !== payload);

    case NotesAction.UPDATE_NOTE:
      return state.map((note) => {
        if (note.id === (payload as TaskType).id) {
          return payload;
        }
        return note;
      });
    case NotesAction.TOGGLE_NOTE:
      return state.map((note) => {
        if (note.id === payload) {
          return { ...note, completed: !note.completed };
        }
        return note;
      });

    default:
      throw new Error();
  }
};

export default notesReducer;
