import React from "react";
import ReactDom from "react-dom";

// CSS
import "./index.css";

const books = [
  {
    id: 1,
    author: "Amelia Hepworth",
    title: "I Love You to the Moon and Back",
    img: "https://m.media-amazon.com/images/I/51p2SDOCV9L._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 2,
    author: "Jean Reagan",
    title:
      "How to Babysit a Grandpa: A Father's Day Book for Dads, Grandpas, and Kids",
    img: "https://m.media-amazon.com/images/I/516TkRFpEvL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
  },
  {
    id: 3,
    author: "Shannon Olsen",
    title:
      "Our Class is a Family (Our Class is a Family & Our School is a Family)",
    img: "https://images-na.ssl-images-amazon.com/images/I/71aLultW5EL._AC_UL348_SR348,348_.jpg",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => (
        <Book key={book.id} {...book} />
      ))}
    </section>
  );
}

const Book = ({ img, title, author, children }) => {
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
