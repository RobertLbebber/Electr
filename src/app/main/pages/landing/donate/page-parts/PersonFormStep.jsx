import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import {
  Button,
  ButtonGroup,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  withStyles,
  FormControl,
} from "@material-ui/core";

const US_STATES = [
  "AA",
  "AE",
  "AK",
  "AL",
  "AP",
  "AR",
  "AS",
  "AZ",
  "CA",
  "CO",
  "CT",
  "DC",
  "DE",
  "FL",
  "GA",
  "GU",
  "HI",
  "IA",
  "ID",
  "IL",
  "IN",
  "KS",
  "KY",
  "LA",
  "MA",
  "MD",
  "ME",
  "MI",
  "MN",
  "MO",
  "MP",
  "MS",
  "MT",
  "NC",
  "ND",
  "NE",
  "NH",
  "NJ",
  "NM",
  "NV",
  "NY",
  "OH",
  "OK",
  "OR",
  "PA",
  "PR",
  "RI",
  "SC",
  "SD",
  "TN",
  "TX",
  "UT",
  "VA",
  "VI",
  "VT",
  "WA",
  "WI",
  "WV",
  "WY",
  "AB",
  "BC",
  "MB",
  "NB",
  "NL",
  "NS",
  "NT",
  "NU",
  "ON",
  "PE",
  "QC",
  "SK",
  "YT",
];

const styles = (theme) => ({
  // ".MuiPopover-root": {
  //   maxHeight: 120,
  // },
  root: {
    maxHeight: "320px",
  },
});

class PersonFormStep extends Component {
  constructor(props) {
    super(props);
    this._tag = this.constructor.name;
    this.state = {
      // Person
      first: "",
      last: "",
      email: "",
      cell: "",
      // Geo Location
      address: "",
      zip: "",
      state: "",
      city: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  canSubmit() {
    let { first, last, email, cell, address, zip, state, city } = this.state;
    return !_.some(
      [first, last, email, cell, address, zip, state, city],
      _.isEmpty
    );
  }

  handleInputChange = (e) => {
    let { name, value } = e.target;
    if (_.isNil(name) || _.isNil(value)) {
      console.error("No target Object:", e);
      return;
    }
    this.setState({ name: value });
  };

  render() {
    let { classes } = this.props;
    return (
      <div>
        Form Header
        <div id="PaymentForm">
          <form>
            <FormControl component="fieldset">
              {/* Person */}
              <TextField
                //   id="first-name"
                label="First Name"
                variant="outlined"
                type="text"
                name="first"
                InputLabelProps={{ shrink: true }}
                onChange={this.handleInputChange}
              />
              <TextField
                //   id="last-name"
                label="Last Name"
                variant="outlined"
                type="text"
                name="last"
                InputLabelProps={{ shrink: true }}
                onChange={this.handleInputChange}
              />
              <TextField
                //   id="email"
                label="Email Address"
                variant="outlined"
                type="email"
                name="email"
                InputLabelProps={{ shrink: true }}
                onChange={this.handleInputChange}
              />
            </FormControl>
            {/* Geo Location */}
            <FormControl component="fieldset">
              <TextField
                label="Address"
                variant="outlined"
                type="text"
                name="address"
                InputLabelProps={{ shrink: true }}
                onChange={this.handleInputChange}
              />
              <TextField
                label="zip"
                variant="outlined"
                type="number"
                name="zip"
                InputProps={{ maxLength: 100, maxLength: 2 }}
                InputLabelProps={{ shrink: true }}
                onChange={this.handleInputChange}
              />
              <TextField
                label="City"
                variant="outlined"
                type="text"
                name="city"
                InputLabelProps={{ shrink: true }}
                onChange={this.handleInputChange}
              />
            </FormControl>
            <InputLabel id="state-label-id">State</InputLabel>
            <Select
              labelId="state-label-id"
              label="State"
              name="state"
              MenuProps={{ PopoverClasses: classes }}
              value={this.state.state}
              // className={}
              onChange={(e) => {
                let state = _.get(e, "target.value");
                this.setState({ state });
                this.handleInputChange(e);
              }}
            >
              {_.map(US_STATES, (value) => (
                <MenuItem key={value} value={value}>
                  {value}
                </MenuItem>
              ))}
            </Select>
          </form>
        </div>
        <ButtonGroup>
          <Button onClick={this.props.onBack}>Back</Button>
          <Button
            disabled={!this.canSubmit()}
            onClick={() => this.props.onSubmit(this.state)}
          >
            Next
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

PersonFormStep.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func,
};

PersonFormStep.defaultProps = {
  onBack: () => {},
};

export default withStyles(styles)(PersonFormStep);
