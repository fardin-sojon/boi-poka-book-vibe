import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import Root from '../Pages/RootLayout/Root';
import Error from '../Pages/ErrorPage/Error';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import ListBooks from '../Pages/ListBooks/ListBooks';
import BookDetails from '../Pages/BookDetails/BookDetails';
import ReadList from '../Pages/ReadList/ReadList';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error>,
    children: [
        {
            index: true,
            path: '/',
            loader: ()=>fetch('/booksData.json'),
            Component: Home
        },
        {
          path: '/about',
          Component: About
        },
        {
          path: '/list-books',
          Component: ListBooks
        },
        {
          path: '/readList',
          loader: ()=>fetch('/booksData.json'),
          Component: ReadList
        },
        {
          path: '/bookDetails/:id',
          loader: ()=>fetch('/booksData.json'),
          Component: BookDetails
        }
    ]
  },
]);