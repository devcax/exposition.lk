import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
import Legacy from './pages/Legacy';
import Error404 from './pages/Error404';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="legacy" element={<Legacy />} />
        <Route path="*" element={<Error404/>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
};

export default App;
