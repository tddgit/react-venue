import React, { Component } from "react";
import MyButton from "../utils/MyButton";
import Zoom from "react-reveal/Zoom";

class Pricing extends Component {
  state = {
    prices: [100, 150, 250],
    positions: ["Balcony", "Medium", "Star"],
    desc: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      " incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud",
      " dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    linkto: ["http://sales/b", "http://sales/m", "http://sales/s"],
    delay: [500, 0, 500],
  };

  showBoxes = () => {
    this.state.prices.map((price, index) => (
      <Zoom key={index} delay={this.state.delay[index]}>
        <div className={"pricing_item"}>
          <div className={"pricing_inner_wrapper"}>
            <div className={"pricing_title"}>
              <span>${price}</span>
              <span>{this.state.positions[index]}</span>
            </div>
            <div className={"pricing_description"}>
              {this.state.desc[index]}
            </div>
            <div className={"pricing_buttons"}>
              <MyButton
                text={"Purchase"}
                bck={"#fff800"}
                color={"#ffffff"}
                link={this.state.linkto[index]}
              />
            </div>
          </div>
        </div>
      </Zoom>
    ));
  };

  render() {
    return (
      <div className={"bck_black"}>
        <div className={"center_wrapper pricing_section"}>
          <h2>Pricing</h2>
          <div className={"pricing_wrapper"}>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
