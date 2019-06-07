import React, { Component } from "react";
import ViewCards from "../ViewContainers/ViewCards.js";

import "../App.css";

class AppCards extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Cards">
        {this.props.items.map(item => {
          console.log(item.details)
          return (
            <ViewCards
              image={item.image}
              name={item.name}
              onClick={() => {
                this.props.cardClick(item.name, item.details);
              }}
            />
          );
        })}
      </div>
    );
  }
}

export default AppCards;
