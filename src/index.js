// ## Namaste React Course by Akshay Saini
// Chapter 09 - Optimizing our App

import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"; // for routing our page import createBrowserRouter and RouterProvider for providing router & Outlet for children component for nested routing
import Body from "./components/Body";
import Header from "./components/Header";
import About from "./components/About";
import Profile from "./components/Profile";
import RestaurantMenu from "./components/RestaurantMenu";
import Contact from "./components/Contact";
import Login from "./components/Login";
import "./index.css";
import Footer from "./components/Footer";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

/* My Food App structure will look like this, 
            1) Header
                - Logo
                - Nav Items(right side)
                - Cart
            2) Body
                - Search bar
                - Restaurants List
                    - Restaurant card
                        - Image
                        - Name
                        - Rating
            3) Footer
                - Links
                - Copyrights
*/

// AppLayout component to render: Header, Outlet(it contain children component like body, About, Restaurant Menu etc) and Footer Component
const AppLayout = () => {
  // authentication
  const [userName, setUserName] = useState();

  useEffect(() => {
    // Make an api call and send username and password
    const data = {
      name: "chetan",
    };
    setUserName(data.name);
  }, []);
  return (
    <React.Fragment>
      {/* <UserContext.Provider> */}
        <div className="app">
          <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName }}>
              <Header />
              <Outlet />
              <Footer />
            </UserContext.Provider>
          </Provider>
        </div>
      {/* </UserContext.Provider> */}
    </React.Fragment>
  );
};

// call createBrowserRouter for routing different pages
const appRouter = createBrowserRouter([
  {
    path: "/", // show path for routing
    element: <AppLayout />, // show component for particular path
    // errorElement: <Error />, // show error component for path is different
    children: [
      // show children component for routing
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "about",
        element: <About />,
        children: [
          {
            // nested routing
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // render RouterProvider and use router as props and pass value appRouter
