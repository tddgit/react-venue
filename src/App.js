import React, { Component } from "react";
import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueNfo";
import Highlights from "./components/Highlights";
import Pricing from "./components/pricing";

class App extends React.Component {
  render() {
    return (
      <div
        className={"App"}
        style={{
          height: `${window.innerHeight}px`,
          background: "cornflowerblue",
        }}
      >
        <Header></Header>
        <Featured></Featured>
        <VenueInfo></VenueInfo>
        <Highlights></Highlights>
        <Pricing></Pricing>
      </div>
    );
  }
}
export default App;
