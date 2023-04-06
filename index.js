const book = {
  title: "Striker",
  author: "Joan Book",
  pageCount: 240,
  isRead: true,
};

function readBook(book) {
  let readStatus;
  if (book.isRead) {
    readStatus = "read";
  } else {
    readStatus = "not read";
  }
  console.log(
    "I have " +
      readStatus +
      " the book " +
      book.title +
      " by " +
      book.author +
      ". It has " +
      book.pageCount +
      " pages."
  );
}

readBook(book);
