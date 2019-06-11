import { createContext } from 'react';
import {Book} from '../components/BasicHooks';

const jayBook = {
  id: 1,
  title: 'Code Complete',
  author: 'Steve McConnell',
  artworkUrl: 'google.com',
  rating: 4.4/5
}

const BookContext = createContext<{
  books: Book[];
  addBook: (book: Book) => void;
}>({
  books: [jayBook],
  addBook: (book: Book) => {},
});

export default BookContext;