import { NotesAction, TaskType } from 'utils/types';

export const addNote = (payload: TaskType) => ({
  type: NotesAction.ADD_NOTE,
  payload,
});
export const deleteNote = (payload: string) => ({
  type: NotesAction.DELETE_NOTE,
  payload,
});
export const updateNote = (payload: TaskType) => ({
  type: NotesAction.UPDATE_NOTE,
  payload,
});

export const toggleNote = (payload: string) => ({
  type: NotesAction.TOGGLE_NOTE,
  payload,
});
