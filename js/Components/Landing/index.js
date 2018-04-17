require('./style.scss');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actionCreators from './actions';

class Landing extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let deltaPosition = this.props.deltaPosition;
    if (this.props.userState) {
      return(
        <div className="landing welcome-message">
          <h1>Landing page, Logged in</h1>
        </div>
      );
    } else {
      return(
        <div className="landing guest-message">
          <h1>Landing page, logged out <Link to={'/login'}>login</Link></h1>
        </div>
      );
    }
  }
}

const mapStateToProps = state => ({
  userState: state.UserStatusReducer.userData,
  landingState: state.LandingReducer.landingData
});
const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
