import React from 'react';

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

export default Book;