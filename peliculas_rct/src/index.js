import React from "react";
import ReactDOM from "react-dom";
import Body from "./components/Body/body";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";

ReactDOM.render(
  <React.StrictMode>
    <Header></Header>
    <Menu></Menu>
    <Body></Body>
    <Footer></Footer>
  </React.StrictMode>,

  document.getElementById("root")
);
