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

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log('click');
  };

  const complexExample = (author) => {
    console.log(author);
  }

  return (
    <article className='book' onMouseOver={() => {
      console.log(title);
    }}>
      <img src={img} alt="" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type='button' onClick={clickHandler}>Order</button>
      <button type='button' onClick={ () => complexExample(author)}>More complex</button>
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));