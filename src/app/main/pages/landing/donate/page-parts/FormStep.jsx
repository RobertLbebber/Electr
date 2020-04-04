import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "react-credit-cards/es/styles-compiled.css";
import { Button, ButtonGroup } from "@material-ui/core";
//import Restful from "util/io/Restful"
//import {} from "@salesforce/design-system-react";
//import {} from "@material-ui/core";

//const style=theme=>{
//    return {
//    }
//}

class FormStep extends Component {
  constructor(props) {
    super(props);
    this._tag = this.constructor.name;
    //this.=this.bind(this);
    this.state = {
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: ""
    };
  }

  canSubmit() {
    let { cvc, expiry, focus, name, number } = this.state;
    return !_.some([cvc, expiry, focus, name, number], _.isEmpty);
  }

  handleInputFocus = e => {
    this.setState({
      focus: e.target.name
    });
  };

  handleInputChange = e => {
    let { name, value } = e.target;
    if (_.isNil(name) || _.isNil(value)) {
      console.error("No target Object:", e);
      return;
    }
    this.setState({ name: value });
  };

  render() {
    return (
      <div>
        Header
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focus={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <form>
            <input
              type="tel"
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="name"
              name="text"
              placeholder="Card Member"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="month"
              name="expiry"
              placeholder="Valid Thru"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <input
              type="number"
              name="cvc"
              placeholder="CVC"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
          </form>
        </div>
        <ButtonGroup>
          <Button onClick={this.props.onBack}></Button>
          <Button
            disabled={!this.canSubmit()}
            onClick={() => {
              this.setState({ step: STEP.FORM });
            }}
          />
        </ButtonGroup>
      </div>
    );
  }
}

FormStep.propTypes = {
  //    className: PropTypes.string,
  //    classes: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func
};

FormStep.defaultProps = {
  onBack: () => {}
};

//export default withStyle(style)(FormStep)
export default FormStep;
