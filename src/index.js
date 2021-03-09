import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {books} from './books'; /* name import - books can not be renamed */
import Book from './Book'; /* default import - Book can be renamed */

function BookList() {
  return (
  <section className='booklist'>
    {books.map((book) => {
      return (<Book key={book.id} /* book={book} */ {...book} />)
    })}
  </section>
  ); 
};

ReactDOM.render(<BookList />, document.getElementById('root'));