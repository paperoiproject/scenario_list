import React, { Component } from "react";

import AppCards from "../AppContainers/AppCards.js";
import AppDetailDialog from "../AppContainers/AppDetailDialog.js";

class ScenarioList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false,
    };
  }

  handleClickFlag() {
    this.setState({
      flag: !this.state.flag,
    });
  }

  render() {
    return (
      <div className="">
        <AppDetailDialog
          name={this.props.name}
          details={this.props.details}
          open={this.state.flag}
          onClose={() => {
            this.handleClickFlag();
          }}
        />
        <AppCards
          items={this.props.items}
          cardClick={(name, details) => {
            this.props.cardClick(name, details);
            this.handleClickFlag();
          }}
        />
      </div>
    );
  }
}

export default ScenarioList;
