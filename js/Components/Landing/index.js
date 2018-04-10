require('./style.scss');
import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as actionCreators from './actions';

const Landing = props => (
  <div className="landing">
    <h1>Landing page</h1>
    <div>
      <input type="text" value={props.searchTerm} onChange={props.setSearchTerm}/>
    </div>
    <button type="button" onClick={props.clearSearchTerm}>clear search</button><br/>
    <Link to="/search">or Browse All</Link>
  </div>
);

const mapStateToProps = state => ({searchTerm: state.SearchReducer.searchTerm});
const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
