import React from 'react';
import { getFeaturedBook } from '../api_helpers/frontend/utils';
import BookList from '../components/BookList';

const Home = ({ books }) => {
  return <BookList data={books}></BookList>;
};
export default Home;

export const getStaticProps = async () => {
  const books = await getFeaturedBook();

  return {
    props: {
      books,
    },
  };
};
