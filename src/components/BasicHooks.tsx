import React, {useState, useEffect} from 'react';
import {mixedList} from './readingLists';

export interface Book {
    title: string,
    author: string,
    rating: number,
}

const fiveStar = (rating: number): string => {
    const denominator = '5.0'
    const numerator: string = ((rating*5).toFixed(1)).toString()
    return `${numerator} / ${denominator}`
}

const BasicHooks: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [filterStatus, setFilterStatus] = useState(false)
    const filter = (): void => {
      const filteredBooks = books.sort((a,b) => {
        return b.rating - a.rating
      })
      setBooks(filteredBooks)
      setFilterStatus(true)
    }
    const getBooks = () => {
      let data = mixedList;
      setBooks(data);
    }
    useEffect(() => {
      getBooks();
    }, []);
    return (
      <div>
        <button disabled={filterStatus} onClick={filter}>Filter</button>
        {books.length ? (
          <ul>
            {
              books.map(book => (
                <li key={book.title}>
                  <b>{book.title}</b> | {book.author} | <i>Rating:</i>  {fiveStar(book.rating)}
                </li>
              ))
            }
          </ul>
        ) : (
          <p>Loading...</p>
        )
        }
      </div>
    )
  }
  
export default BasicHooks;