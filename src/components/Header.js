import { useState } from "react";
import {Link} from "react-router-dom";

//named export..
export const Title = () => {
    return (
        <div ><a href="/"><img  className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw" alt="logo"/>
       </a></div>
    );
}

const Header = ()=> {

    const [isLoggedIn,setIsLoggedIn] = useState(true);
    return (
      <div className="header">
       <Title />
        <ul>
          <Link to="/"><li>Home</li></Link>
          <Link to="/about"><li>About</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
         <a href="/"> <li>Cart</li></a>
        </ul>
        {
          isLoggedIn?
          <button onClick={() => setIsLoggedIn(false)
          }>LogOut</button>:
          <button onClick={ () => setIsLoggedIn(true)}>Login</button>
        }
      </div> 
      
   );
   };

   export default Header; // default export..
