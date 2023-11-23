import { useState } from "react";

import { books as booksData } from "../constants/mockData";
import BookCard from "./BookCard.jsx";

import styles from "./Books.module.scss";
import SideCard from "./SideCard";
import SearchBox from "./SearchBox";
function Books() {
  const [books, setBooks] = useState(booksData);
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState("");
  const serachHandler = () => {
    if (search) {
      const newBooks = booksData.filter((book) =>
        book.title.toLowerCase().includes(search)
      );
      setBooks(newBooks);
    } else {
      setBooks(booksData);
    }
  };
  const handlerListLiked = (book, status) => {
    if (status) {
      const newArray = liked.filter((item) => item.id != book.id);
      setLiked(newArray);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <>
      <SearchBox
        search={search}
        setSearch={setSearch}
        serachHandler={serachHandler}
      />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard
              key={book.id}
              data={book}
              handlerListLiked={handlerListLiked}
            />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favorites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
