import React, { Component } from "react";
import {
  Card,
  CardContent,
  Grow,
  withStyles,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import PropTypes from "prop-types";
import _ from "lodash";
import classNames from "classnames";

import AmountFormStep from "./page-parts/AmountFormStep";
import PersonFormStep from "./page-parts/PersonFormStep";
import CardFormStep from "./page-parts/CardFormStep";

//import Restful from "util/io/Restful"

const styles = (theme) => ({
  root: {
    background:
      "radial-gradient(" +
      theme.palette.primary.light +
      " 0%, " +
      theme.palette.primary.dark +
      " 80%)",
    color: theme.palette.primary.contrastText,
  },
  paperHolder: { marginTop: "24px", width: "500px" },
});

export const STEP = {
  SETUP: { index: 1, label: "Amount" },
  PERSON_FORM: { index: 2, label: "Details" },
  CARD_FORM: { index: 3, label: "Payment" },
  PREVIEW: { index: 4, label: "Preview" },
  DONE: { index: 5, label: "Completion" },
};

class DonatePage extends Component {
  constructor(props) {
    super(props);
    this._tag = this.constructor.name;
    this.renderStepSetup = this.renderStepSetup.bind(this);
    this.renderStepCardForm = this.renderStepCardForm.bind(this);
    this.renderStepPersonForm = this.renderStepPersonForm.bind(this);
    this.state = {
      step: STEP.SETUP,
      amount: null,
      creditCard: null,
      personal: null,
    };
  }

  renderStepSetup() {
    return (
      <AmountFormStep
        onBack={() => {}}
        onSubmit={(amount) => {
          this.setState({ step: STEP.PERSON_FORM, amount });
        }}
      />
    );
  }

  renderStepPersonForm() {
    return (
      <PersonFormStep
        onSubmit={(personal) => {
          this.setState({ step: STEP.CARD_FORM, personal });
        }}
        onBack={() => this.setState({ step: STEP.SETUP })}
      />
    );
  }

  renderStepCardForm() {
    return (
      <CardFormStep
        onSubmit={(creditCard) => {
          this.setState({ step: STEP.PREVIEW, creditCard });
        }}
        onBack={() => this.setState({ step: STEP.PERSON_FORM })}
      />
    );
  }

  renderStepPreview() {}
  renderStepDone() {}

  renderStepper() {
    return (
      <Stepper activeStep={this.state.step.index - 1} alternativeLabel>
        {_.map(STEP, ({ index, label }) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    );
  }

  render() {
    let { classes } = this.props;
    let renderStep;
    switch (this.state.step) {
      case STEP.SETUP:
        renderStep = this.renderStepSetup;
        break;
      case STEP.PERSON_FORM:
        renderStep = this.renderStepPersonForm;
        break;
      case STEP.CARD_FORM:
        renderStep = this.renderStepCardForm;
        break;
      case STEP.PREVIEW:
        renderStep = this.renderStepPreview;
        break;
      case STEP.DONE:
        renderStep = this.renderStepDone;
        break;
      default:
        console.error("Invalid Step: " + this.state.step);
        renderStep = () => {};
    }
    return (
      <div
        className={classNames(
          classes.root,
          "flex flex-col flex-auto flex-no-shrink items-center justify-center p-32"
        )}
      >
        <div className="flex flex-col items-center justify-center w-full">
          {this.renderStepper()}
          <Grow in={true}>
            <Card className={"w-full " + classes.paperHolder}>
              <CardContent className="flex flex-col items-center justify-center text-center p-48">
                {renderStep()}
              </CardContent>
            </Card>
          </Grow>
        </div>
      </div>
    );
  }
}

DonatePage.propTypes = {
  classes: PropTypes.object,
  qrLocation: PropTypes.string,
};

DonatePage.defaultProps = {};

export default withStyles(styles)(DonatePage);
