import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Body from "./components/Body/body";
import Footer from "./components/Footer/footer";
import Header from "./components/Header/header";
import Menu from "./components/Menu/menu";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header></Header>
      <Menu></Menu>
      <Body></Body>
      <Footer></Footer>
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);
