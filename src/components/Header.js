
//named export..
export const Title = () => {
    return (
        <div ><a href="/"><img  className="logo" src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4=w100-rw" alt="logo"/>
       </a></div>
    );
}

const Header = ()=> {
    return (
      <div className="header">
       <Title />
        <ul>
          <a href="/"><li>Home</li></a>
          <a href="/"><li>About</li></a>
          <a href="/"><li>Contact</li></a>
         <a href="/"> <li>Cart</li></a>
        </ul>
      </div> 
   );
   };

   export default Header; // default export..
