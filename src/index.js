import React from 'react';
import ReactDOM from 'react-dom';

// CSS
import './index.css';

// setup variables
const firstBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81eB%2B7%2BCkUL._AC_UL200_SR200,200_.jpg",
  title: 'I Love You to the Moon and Back',
  author: 'Amelia Hepworth'
}

const secondBook = {
  img: "https://images-na.ssl-images-amazon.com/images/I/81drfTT9ZfL._AC_UL200_SR200,200_.jpg",
  title: 'The Cat in the Hat',
  author: 'Dr. Seuss'
}

function BookList() {
  return (
  <section className='booklist'>
    <Book 
      img={firstBook.img} 
      title={firstBook.title} 
      author={firstBook.author} 
    >
      <p>
        Show a child just how strong your love is every minute of the day! 
        Features a "To" and "From" personalization page, making this sweet offering 
        an ideal gift for baby showers, birthdays, and new parents. 
      </p>
    </Book>
    <Book 
      img={secondBook.img} 
      title={secondBook.title} 
      author={secondBook.author} 
    />
  </section>)  
}

const Book = (props) => {
  const { img, title, author, children } =  props;
  console.log(children);
  return (
    <article className='book'>
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
}

ReactDOM.render(<BookList />, document.getElementById('root'));