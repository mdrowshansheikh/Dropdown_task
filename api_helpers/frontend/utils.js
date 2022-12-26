import axios from 'axios';

// Get All books ====================>
export const GetAllBooks = async () => {
  const res = await axios.get('http://localhost:3000/api/books');
  if (res.status !== 200) {
    return new Error('Internal Server Error');
  }
  const data = res.data?.books;
  return data;
};

// Get Featured Books =======================>
export const getFeaturedBook = async () => {
  const books = await GetAllBooks();
  if (books.length == 0) {
    return [];
  }
  const featuredBooks = books.filter((book) => book.featured === true);
  return featuredBooks;
};
