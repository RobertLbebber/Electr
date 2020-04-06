import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";
import QRCode from "qrcode.react";
import {
  ButtonGroup,
  FormControlLabel,
  Grid,
  RadioGroup,
  Radio,
  TextField,
  Typography,
  Button,
  withStyles,
  Divider,
  FormControl,
} from "@material-ui/core";

import BackButton from "app/main/components/first-party/inputs/buttons/BackButton";

const styles = (theme) => ({
  hundo: { height: "100%", width: "100%" },
  qrcode: { display: "block", margin: "auto" },
  radio: { flexDirection: "row", width: "300px", margin: "auto" },
  form: { flexDirection: "row", marginLeft: "0px", marginRight: "0px" },
  divider: { marginBottom: "8px", marginTop: "4px" },
});

const MAX_CURRENCY = 2000;

class AmountFormStep extends Component {
  constructor(props) {
    super(props);
    this._tag = this.constructor.name;
    //this.=this.bind(this);
    this.state = {
      valueIndex: 0,
      value: null,
      customValue: 125,
      isCustomValid: true,
    };
    this.canSubmit = this.canSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  canSubmit = () => {
    if (
      this.state.valueIndex < 0 ||
      this.state.value < 0 ||
      this.state.value > MAX_CURRENCY
    ) {
      return false;
    }
    return true;
  };

  handleInputChange = (e) => {
    let { name, value } = e.target;
    if (_.isNil(name) || _.isNil(value)) {
      console.error("No target Object:", e);
      return;
    }
    this.setState({ name: value });
  };

  renderRadiobar(radio, form) {
    let rangeGroups = ["1", "10", "25", "50"];
    let unit = "$";
    //  language.getCurrency();
    // <LocaleContext.Consumer>
    // {language => {

    return (
      <form>
        <FormControl className={form} component="fieldset">
          <RadioGroup
            className={radio}
            value={this.state.value}
            name={this.state.value}
            onClick={(e) => {
              this.setState({ value: e.target.value });
            }}
          >
            {_.map(rangeGroups, (value, index) => (
              <FormControlLabel
                labelPlacement="bottom"
                className={form}
                name={value}
                label={unit + "" + value}
                key={index}
                control={<Radio color="primary" value={value} />}
              />
            ))}
            <FormControlLabel
              value={this.state.customValue + ""}
              name={unit + "" + this.state.customValue}
              className={form}
              label={
                <TextField
                  label="Custom Amount"
                  helperText={this.state.isCustomValid ? "" : "Invalid Amount"}
                  value={this.state.customValue}
                  error={
                    this.state.customValue > MAX_CURRENCY ||
                    this.state.customValue < 0
                  }
                  type="number"
                  onChange={(e) => {
                    let value = _.get(e, "target.value");
                    this.setState({
                      value,
                      valueIndex: 6,
                      customValue: value,
                      isCustomValid: !(value > MAX_CURRENCY || value < 0),
                    });
                  }}
                />
              }
              key="custom"
              control={
                <Radio color="primary" value={this.state.customValue + ""} />
              }
            />
          </RadioGroup>
        </FormControl>
      </form>
    );
  }

  renderPadding(hundo) {
    return <Grid item xs={3} className={hundo}></Grid>;
  }

  render() {
    let { form, hundo, qrcode, radio, divider } = this.props.classes;
    return (
      <React.Fragment>
        {this.renderPadding(hundo)}
        <Grid container item xs className={hundo} direction="column">
          <Grid item xs={1} />
          <BackButton />
          <Grid item xs className={hundo}>
            <Typography variant="h4">
              {/* <FormattedMessage id={"Pages.Donation.Header"} /> */}
              Contribute Now to Support
              <br />
              {this.props.electrName}
            </Typography>
            <Divider className={divider} />
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
            <Typography variant="h5">
              {/* <FormattedMessage id={"Pages.Donation.Body"} /> */}
              Donate Body Information
            </Typography>
            {this.renderRadiobar(radio, form)}
            <ButtonGroup>
              <Button
                color="primary"
                disabled={!this.canSubmit()}
                onClick={() => this.props.onSubmit(this.state)}
              >
                <Typography variant="body1">Next</Typography>
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        {this.renderPadding(hundo)}
      </React.Fragment>
    );
  }
}

AmountFormStep.propTypes = {
  electrName: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onBack: PropTypes.func,
};

AmountFormStep.defaultProps = {
  electrName: "The Campaign",
  onBack: () => {},
};

export default withStyles(styles)(AmountFormStep);
