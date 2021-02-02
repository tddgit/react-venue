import React, { Component } from "react";
import MyButton from "../utils/MyButton";

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
  };

  showBoxes = () => {
    this.state.prices.map((prices, index) => {
      return (
        <div className={"pricing_item"}>
          <div className={"pricing_inner_wrapper"}>
            <div className={"pricing_title"}>
              <span>{this.state.prices[index]}</span>
              <span>{this.state.positions[index]}</span>
              <div className={"pricing description"}>
                {this.state.desc[index]}
              </div>
              <div className={"pricing button"}>
                <MyButton
                  text={"Purchase"}
                  bck={"#fff800"}
                  color={"#ffffff"}
                  link={this.state.linkto[index]}
                />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className={"bck_black"}>
        <div className={"center_wrapper pricing_section"}>
          <h2>Pricing</h2>
          <div className={"pricing-wrapper"}>{this.showBoxes()}</div>
        </div>
      </div>
    );
  }
}

export default Pricing;
