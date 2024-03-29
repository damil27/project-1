import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Layout from "./components/Layout";
import Invoices from "./components/Invoices";
import { Provider } from "./components/context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/Details"

function App() {

  const router = createBrowserRouter([
    { path: "/", element: <Invoices /> },
    { path: "/:id", element: <Details /> },
    
])


  return (
    <>
      <Provider>
        <Layout>
         <RouterProvider router={router} />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
