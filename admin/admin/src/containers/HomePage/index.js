/*
 *
 * HomePage
 *
 */

import React from "react";
import { connect } from "react-redux";

import { bindActionCreators, compose } from "redux";
import { createStructuredSelector } from "reselect";
import PropTypes from "prop-types";
import DatePicker from "react-day-picker";

import "react-day-picker/lib/style.css";

import { selectPlugins } from "../App/selectors";

import injectReducer from "../../utils/injectReducer";
import injectSaga from "../../utils/injectSaga";

import { getArticles, onChange, submit } from "./actions";
import makeSelectHomePage from "./selectors";
import reducer from "./reducer";
import saga from "./saga";


import pages from "../../assets/images/dashboard/pages.png";
import hackers from "../../assets/images/dashboard/hackers.png";
import users from "../../assets/images/dashboard/visits.png";
import active from "../../assets/images/dashboard/active.png";
import chart from "../../assets/images/dashboard/chart.png";
import world from "../../assets/images/dashboard/world-report.png";

export class HomePage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function

  state = {
    startDate: new Date()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (<div>

        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleChange}
        />
        <div>
          <h1 style={
            {textShadow: '0 0 10px rgba(0,0,0, .4)'}
          }>
            <li>Вітаємо Вас в панелі адміністратора</li>
            <li> Генерального Штабу ЗСУ</li>
          </h1>
        </div>
    </div>

  );
  }
}

HomePage.propTypes = {
  getArticles: PropTypes.func.isRequired,
  homePage: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  plugins: PropTypes.object.isRequired,
  submit: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  homePage: makeSelectHomePage(),
  plugins: selectPlugins()
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      getArticles,
      onChange,
      submit
    },
    dispatch
  );
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: "homePage", reducer });
const withSaga = injectSaga({ key: "homePage", saga });

// export default connect(mapDispatchToProps)(HomePage);
export default compose(withReducer, withSaga, withConnect)(HomePage);
