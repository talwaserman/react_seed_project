require('./style.scss');
import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from '../AppWrapper/actions';

const Header = props => (
  <div className="header">
   <img 
      src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L5K1I1WsuQMZ8ecEuWg%2Favatar.png?generation=1518623866348435&alt=media" 
      alt="logo"
      width="50px"
    />
    {!!props.userData && <button type="button" onClick={props.userLogout}>Logout</button>}
  </div>
);

const mapStateToProps = state => ({
  userData: state.UserStatusReducer.userData,
});

const mapDispatchToProps = dispatch => () => bindActionCreators(actionCreators, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
