import React, {useReducer, useContext, useState} from 'react'; 
import BasicHooks, {Book} from './BasicHooks';

import BookContext from '../context/bookContext';
import { reducer, State, Action, initialState } from '../context/bookReducer';
import { ADD_BOOK } from '../context/types';


const ContextAPI: React.FC = () => {
    //const context = useContext(BookContext)
    //const lastBook = context.books[context.books.length-1]
    //const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState);
    const addBook = (book: Book) => {
      // dispatch({
      //   type: ADD_BOOK,
      //   payload: book
      // })
    };
    // console.log("context", context)
    return (
      
      // <BookContext.Provider value={{books: [], addBook}}>
        // {/* <p>Currently Reading:  {lastBook.title} by {lastBook.author}</p> */}
      <div>
        <InnerComponent />
      </div>
      // </BookContext.Provider>
      )
}

const InnerComponent = () => {
  const context = useContext(BookContext);
  console.log("2nd call", context)
  const [book, setBook] = useState<Book>({
    title: "Blank",
    author: "You",
    rating: 5, 
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBook({ ...book, [event.target.name]: event.target.value });
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (book.author.trim() === '' || book.title.trim() === '') return;

    const newBook = {
      author: book.author.trim(),
      title: book.title.trim(),
      rating: book.rating
    };

    context.addBook(newBook);
    setBook({ 
      title: "Blank",
      author: "You",
      rating: 5,  });
    };
  return (
    <BookContext.Provider value={{books: [], addBook: () => {}}}>
      <h1>Make Your Reading List</h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="firstName"
            placeholder="First Name.."
            value={book.author}
            onChange={onChange}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            name="lastName"
            placeholder="Last Name.."
            value={book.title}
            onChange={onChange}
          />
        </div>
        <button className="btn btn-success" type="submit">
          Add Book
        </button>
      </form>
        <InnerInnerComponent />
    </ BookContext.Provider>
  )
}

const InnerInnerComponent = () => {
  const context = useContext(BookContext)
  const length = context.books
  return (
    <>
      <b>How Many Books On Your List?</b>
      <i>{length.length}</i>
    </>
  )
}
  
export default ContextAPI;