import { useState } from "react";
import {Link} from "react-router-dom";

//named export..
export const Title = () => {
    return (
        <div ><a href="/"><img  className="h-28 p-2" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw" alt="logo"/>
       </a></div>
    );
}

const Header = ()=> {

    const [isLoggedIn,setIsLoggedIn] = useState(true);
    return (
      <div className="flex justify-between bg-pink-100 shadow-lg">
       <Title />
        <ul className="flex py-10">
          <Link to="/"><li className="px-2">Home</li></Link>
          <Link to="/about"><li className="px-2">About</li></Link>
          <Link to="/contact"><li className="px-2">Contact</li></Link>
          <Link to="/instamart"><li className="px-">Instamart</li></Link>         
          <a href="/"> <li>Cart</li></a>
        </ul>
        {
          isLoggedIn?
          <button onClick={() => setIsLoggedIn(false)
          } className="py-8">LogOut</button>:
          <button onClick={ () => setIsLoggedIn(true)} className="py-8">Login</button>
        }
      </div> 
      
   );
   };

   export default Header; // default export..
