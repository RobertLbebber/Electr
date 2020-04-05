import React, { Component } from "react";
import { Fab } from "@material-ui/core";

class BackButton extends Component {
  constructor(props) {
    super(props);
    this._tag = this.constructor.name;
  }

  render() {
    return (
      <Fab onClick={window.history.back} className={this._tag} {...this.props}>
        {/* {locale} */}
        <b>X</b>
      </Fab>
    );
  }
}

export default BackButton;
