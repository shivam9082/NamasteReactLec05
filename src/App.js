import React from "react";
import ReactDOM from "react-dom/client";
import Header,{Title} from "./components/Header.js"; //both default as well as named import..
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs.js"; 
import Error from "./components/Error.js";
import ContactUs from "./components/ContactUs.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

//copied data from swiggy's official site..


//React Functional Component..



const AppLayOut = () => {
    return (
      <>
        <Header />
        {/* {Outlet} -> I know what outlet is.. earlier i was dying for it.*/}
        <Outlet/>
        <Footer />
      </>
    );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayOut />,
    errorElement: <Error />,
    children:[
      {
        path: "/",
        element: <Body />,
        
      },
      {
        path: "/about",
        element: <AboutUs />,
        
      },
      {
          path: "/contact",
          element: <ContactUs />,
          
      },
      {
        path: "/restaurant/:id", //this refers to dynamic routing means.. any thing can take place instead of id
        element: <RestaurantMenu/>,
      },
    ]
  },
 

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);