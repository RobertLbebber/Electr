import React, { Component } from "react";
import _ from "lodash";
import { IntlProvider } from "react-intl";

import Langauges from "assets/locale/Langauges";

const LocaleContext = React.createContext({ value: Langauges["en"] });
/**
 *  TODO Documentation
 */
export class LocaleProvider extends Component {
  constructor(props) {
    super(props);

    let moneyRanges = _.get(Langauges, `tree.en.common.money.range.id`);
    this.state = {
      locale: "en",
      money: {
        rangeGroups: _.map(moneyRanges, range => range.split("|")),
        maxCurrency: _.get(Langauges, `tree.en.common.money.maxCurrency`, 2000),
        unit: _.get(Langauges, `tree.en.common.money.currencySymbol`, "$")
      }
    };
    this.getCurrency = this.getCurrency.bind(this);
  }

  changeLocale = locale => {
    this.setState({ locale, money: this.newCurrency(locale) });
  };

  newCurrency(locale) {
    let moneyRanges = _.get(Langauges, `tree.${locale}.common.money.range.id`);
    return {
      rangeGroups: _.map(moneyRanges, range => range.split("|")),
      maxCurrency: _.get(Langauges, `tree.${locale}.common.money.maxCurrency`),
      unit: _.get(Langauges, `tree.${locale}.common.money.currencySymbol`)
    };
  }

  getCurrency() {
    return {
      rangeGroups: this.state.money.rangeGroups,
      maxCurrency: this.state.money.maxCurrency,
      unit: this.state.money.unit
    };
  }

  render() {
    return (
      <IntlProvider
        locale={this.state.locale}
        messages={Langauges.flatten[this.state.locale]}
      >
        <LocaleContext.Provider
          value={{
            tree: Langauges.tree[this.state.locale],
            changeLocale: this.changeLocale,
            getCurrency: this.getCurrency
          }}
        >
          {this.props.children}
        </LocaleContext.Provider>
      </IntlProvider>
    );
  }
}

export default LocaleContext;
