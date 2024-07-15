import React from "react";
import ReactDOM from "react-dom/client";
import Header,{Title} from "./components/Header.js"; //both default as well as named import..
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";

//copied data from swiggy's official site..


//React Functional Component..



const AppLayOut = () => {
    return (
      <>
        <Header />
        <Body />
        <Footer />
      </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayOut />);