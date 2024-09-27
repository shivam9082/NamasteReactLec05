import React,{ lazy , Suspense, useEffect,useState} from "react";
import ReactDOM from "react-dom/client";
import Header,{Title} from "./components/Header.js"; //both default as well as named import..
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter , RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs.js"; 
import Error from "./components/Error.js";
import ContactUs from "./components/ContactUs.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Shimmer from "./components/ShimmerCard.js";
import UserContext from "../utils/userContext.js";
import { Provider } from "react-redux";
import appStore from "../utils/appStore.js";
import Cart from "./components/Cart.js";
//import Instamart from "./components/Instamart.js"; -> this is normal importing of instamart... further we will be lazy importing...

/* 
    - Chunking
    - Code Splitting
    - Lazy Loading
    - Dynamic Bundling
    - On Demand Loading
    - Dynamic Import

 */

  const Instamart = lazy( () => import("./components/Instamart.js"));
  // On Demand Loading -> on render -> suspend loading.

//React Functional Component..



const AppLayOut = () => {

{/* some authentication code is written*/}

 const [userName,setUserName] = useState();

 //api call giving me user info

 useEffect(()=>{
  const data = {
    name: "Shivam Pandey"
  };
  setUserName(data.name);
 },[]);
 
    return (
     <Provider store={appStore}>
         <UserContext.Provider  value={{ loggedInUser : userName , setUserName }}>
            <>
              <Header />
                {/* {Outlet} -> I know what outlet is.. earlier i was dying for it.*/}
              <Outlet/>
              <Footer />
            </>
          </UserContext.Provider>
     </Provider>
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
      {
        path: "/instamart",
        element: <Suspense fallback={<Shimmer/>}> 
                   <Instamart />
                </Suspense>,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ]
  },
 

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);