import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Hero from "./components/Hero/Hero";
import Portfolio from "./components/Portfolio/Portfolio";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Layout from "./components/Layout/Layout";
import NotFound from "./components/NotFound/NotFound";

const router = createBrowserRouter([
  {
    path: "/StartReact",
    element: <Layout />,
    children: [
      { path: "/StartReact", element: <Hero /> },
      { path: "/StartReact/about", element: <About /> },
      { path: "/StartReact/contact", element: <Contact /> },
      { path: "/StartReact/portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
library.add(fab, fas, far);
