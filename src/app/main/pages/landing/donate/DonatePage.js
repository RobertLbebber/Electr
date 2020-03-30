import React, { Component } from "react";
import QRCode from "qrcode.react";
import {
  ButtonGroup,
  Container,
  FormControlLabel,
  Grid,
  RadioGroup,
  Radio,
  TextField,
  Typography,
  withStyles,
  Button
} from "@material-ui/core";
import PropTypes from "prop-types";
import _ from "lodash";

import withReducer from "app/store/withReducer";
import { bindActionCreators } from "redux";
import * as Actions from "./store/actions";
import reducer from "./store/reducers";
import BackButton from "app/main/components/first-party/inputs/buttons/BackButton";
// import LocaleContext from "Context/LocaleContext";

//import Restful from "util/io/Restful"

const style = theme => ({
  hundo: { height: "100%", width: "100%" },
  qrcode: { display: "block", margin: "auto" },
  radio: { display: "grid", width: "300px", margin: "auto" }
});

class DonatePage extends Component {
  constructor(props) {
    super(props);
    this._tag = this.constructor.name;
    this.canSubmit = this.canSubmit.bind(this);
    this.state = { valueIndex: 0, value: null, customValue: 125 };
  }

  canSubmit = () => {
    if (this.state.valueIndex < 0 || this.state.value < 0) {
      return false;
    }
    return true;
  };

  renderRadiobar(radio) {
    let { rangeGroups, unit, maxCurrency } = {
      rangeGroups: [1, 10, 25, 50],
      unit: "$",
      maxCurrency: 2000
    };
    //  language.getCurrency();
    // <LocaleContext.Consumer>
    // {language => {

    return (
      <RadioGroup
        className={radio}
        value={this.state.value}
        onClick={e => {
          this.setState({ value: e.target.value });
        }}
      >
        {_.map(rangeGroups[0], (value, index) => (
          <FormControlLabel
            value={value}
            name={unit + "" + value}
            label={unit + "" + value}
            key={index}
            control={<Radio />}
          />
        ))}
        {/* <FormattedMessage id={"common.money.custom"}>
                {locale => (
                  <FormattedMessage id={"common.money.invalid"}>
                    {locale2 => ( */}
        <FormControlLabel
          value={this.state.customValue}
          name={unit + "" + this.state.customValue}
          label={unit + "" + this.state.customValue}
          key="custom"
          control={
            <Radio>
              <TextField
                label="Custom Amount"
                helperText="Invalid Amount"
                value={this.state.customValue}
                error={
                  this.state.customValue > maxCurrency ||
                  this.state.customValue < 0
                }
                type="number"
                onChange={e =>
                  this.setState({
                    valueIndex: 6,
                    value: e.target.value,
                    customValue: e.target.value
                  })
                }
              />
            </Radio>
          }
        />
        {/* )}
                  </FormattedMessage>
                )}
              </FormattedMessage> */}
      </RadioGroup>
    );
    // }}
    // </LocaleContext.Consumer>
    // );
  }

  renderPadding(hundo) {
    return (
      <Grid item xs={3} className={hundo}>
        {/* <Box border={3} className={hundo} /> */}
      </Grid>
    );
  }

  render() {
    let { hundo, qrcode, radio } = this.props.classes;
    return (
      <div className={this._tag + " " + hundo}>
        <Container>
          <Grid container className={hundo}>
            {this.renderPadding(hundo)}
            <Grid container item xs className={hundo} direction="column">
              <Grid item xs={1} />
              <Button onClick={} />
              <Grid item xs className={hundo}>
                <Typography>
                  {/* <FormattedMessage id={"Pages.Donation.Header"} /> */}
                  Donate Header Information
                </Typography>
                <QRCode
                  className={qrcode}
                  size={300}
                  value={
                    this.props.qrLocation +
                    "_" +
                    this.state.value +
                    "_" +
                    this.state.valueIndex
                  }
                />
                <Typography>
                  {/* <FormattedMessage id={"Pages.Donation.Body"} /> */}
                  Donate Body Information
                </Typography>
                {this.renderRadiobar(radio)}
                <ButtonGroup>
                  <BackButton />
                  <Button disabled={!this.canSubmit()} onClick={} />
                </ButtonGroup>
              </Grid>
            </Grid>
            {this.renderPadding(hundo)}
          </Grid>
        </Container>
      </div>
    );
  }
}

DonatePage.propTypes = {
  classes: PropTypes.object,
  qrLocation: PropTypes.string
};

DonatePage.defaultProps = {};

function mapDispatchToProps(dispatch) {
  return {};
}
function mapStateToProps({ donatePage }) {
  return {};
}

export default withStyles(style)(
  withReducer("donatePage", reducer)(
    DonatePage,
    connect(mapStateToProps, mapDispatchToProps)
  )
);
