import React, { Component } from "react";

import "./resources/styles.css";
import Header from "./components/header_footer/Header";
import Featured from "./components/featured";
import VenueInfo from "./components/venueNfo";

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
      </div>
    );
  }
}
export default App;
