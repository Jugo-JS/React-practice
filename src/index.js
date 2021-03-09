import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
const books = [
  {
    id: 1,
    img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
    title: 'I Love You to the Moon and Back',
    author: 'Amelia Hepworth'
  }
  ,
  {
    id: 2,
    img: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
    title: 'The Cat in the Hat',
    author: 'Dr. Seuss'
  }
  ,
  {
    id: 3,
    img: "https://images-na.ssl-images-amazon.com/images/I/81WZ6QvGZ2L._AC_UL200_SR200,200_.jpg",
    title: "It's Not Easy Being a Bunny",
    author: 'Marilyn Sadler'
  }
];

function BookList() {
  return (
  <section className='booklist'>
    {books.map((book) => {
      return (<Book key={book.id} /* book={book} */ {...book} />)
    })}
  </section>)  
}

const Book = (props) => {
  const { img, title, author } =  props;
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));