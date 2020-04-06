import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import "react-credit-cards/es/styles-compiled.css";
import Cards from "react-credit-cards";
import {
  Button,
  ButtonGroup,
  TextField,
  Grid,
  Divider,
  Typography,
} from "@material-ui/core";

class CardFormStep extends Component {
  constructor(props) {
    super(props);
    this._tag = this.constructor.name;
    //this.=this.bind(this);
    this.state = {
      // Card
      cvc: "",
      expiry: "",
      focus: "",
      name: "",
      number: "",
    };
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  canSubmit() {
    let { cvc, expiry, focus, name, number } = this.state;
    return !_.some([cvc, expiry, focus, name, number], _.isEmpty);
  }

  handleInputFocus = (e) => {
    this.setState({
      focus: e.target.name,
    });
  };

  handleInputChange = (e) => {
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
        <Typography variant="display3">Form Header</Typography>
        <div id="PaymentForm">
          <Cards
            cvc={this.state.cvc}
            expiry={this.state.expiry}
            focus={this.state.focus}
            name={this.state.name}
            number={this.state.number}
          />
          <Divider orientation="vertical" flexItem />
          <form>
            {/* Credit Card */}
            <TextField
              label="Card Member"
              variant="outlined"
              type="name"
              InputLabelProps={{ shrink: true }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <TextField
              label="Card Number"
              variant="outlined"
              type="tel"
              name="number"
              inputProps={{ maxLength: 16 }}
              InputLabelProps={{ shrink: true }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <TextField
              label="Card Number"
              variant="outlined"
              type="tel"
              name="number"
              inputProps={{ maxLength: 16 }}
              InputLabelProps={{ shrink: true }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <TextField
              label="CVC"
              type="number"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              InputProps={{ maxLength: 3 }}
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            {/* Person */}
          </form>
        </div>
        <ButtonGroup>
          <Button onClick={this.props.onBack}>Back</Button>
          <Button
            disabled={!this.canSubmit()}
            onClick={() => this.props.onSubmit(this.state)}
          >
            <Typography variant="body1">Next</Typography>
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

CardFormStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func,
};

CardFormStep.defaultProps = {
  onBack: () => {},
};

export default CardFormStep;
