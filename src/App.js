import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueNfo";
import Highlights from "./components/Highlights";

class App extends React.Component {
  render() {
    return (
      <div
        className={"App"}
        style={{ height: "1500px", background: "cornflowerblue" }}
      >
        <Header></Header>
        <Featured></Featured>
        <VenueInfo></VenueInfo>
        <Highlights></Highlights>
      </div>
    );
  }
}
export default App;
