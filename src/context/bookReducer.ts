import { ADD_BOOK } from './types';
import {Book} from '../components/BasicHooks';

export const initialState: {books: Book[]} = {
    books: []
};

export type State = typeof initialState;

export type Action =
| {type: typeof ADD_BOOK, payload: Book}

const addBook = (book: Book, state: State) => {
    const newBook = [...state.books, book];
    return {
        ...state,
        books: newBook
    };
};

export const reducer = (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_BOOK:
      return addBook(action.payload, state);
    default:
      return state;
  }
};