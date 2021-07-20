import React from "react";

const HomePage = React.lazy(() => import("./pages/Home"));
const SingleCategoryPage = React.lazy(() => import("./pages/SingleCategory"));

export default [
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '/cat/:id',
    Component: SingleCategoryPage
  }
]