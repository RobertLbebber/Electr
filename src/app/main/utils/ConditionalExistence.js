import React, { Component } from "react";

/**
 * @example
 * ConditionalExistence(Button, props=>props.showModal, NoButton)
 */

function ConditionalExistence(
  WrappedComponent,
  conditionFn,
  AlternativeComponent
) {
  return class extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (conditionFn(props)) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <AlternativeComponent {...this.props} />;
      }
    }
  };
}

export default ConditionalExistence;
