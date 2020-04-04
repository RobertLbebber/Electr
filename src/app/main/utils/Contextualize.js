import React from "react";
/**
 *
 * @param {Component} IgnorantComponent
 * @param {Context} Context
 */
function context(IgnorantComponent, Context, asKey) {
  return class Contextualized extends React.Component {
    donatePut() {
      axios.put("/api/donate", update).then(response => response.Data);
    }

    render() {
      if (!_.isNil(asKey)) {
        return (
          <Context.Consumer>
            {context => <IgnorantComponent {...{ [asKey]: context }} />}
          </Context.Consumer>
        );
      } else {
        return (
          <Context.Consumer>
            {context => <IgnorantComponent {...context} />}
          </Context.Consumer>
        );
      }
    }
    displayName =
      (!_.isNil(IgnorantComponent.displayName)
        ? IgnorantComponent.displayName
        : IgnorantComponent.constructor.name) + "Contextualized";
  };
}
