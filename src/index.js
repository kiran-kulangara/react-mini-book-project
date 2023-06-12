import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const firstBook = {
  author: "Amelia Hepworth",
  title: "I Love You to the Moon and Back",
  img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
};

const secondBook = {
  author: "Jean Reagan",
  title:
    "How to Babysit a Grandpa: A Father's Day Book for Dads, Grandpas, and Kids",
  img: "https://m.media-amazon.com/images/I/516TkRFpEvL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
};

function BookList() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        <p>
          Lorem ipsum dolor sit amet. Ea quaerat aspernatur et tempora voluptate
          eum excepturi vero et tenetur sapiente. Qui quidem tempore aut iusto
          animi et rerum perspiciatis. Eum consequuntur quam vel distinctio
          voluptatem est voluptatem dolor sed velit quia aut autem dolore eum
          dignissimos quae eum voluptas reiciendis.
        </p>
      </Book>
      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
  console.log(children);
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
