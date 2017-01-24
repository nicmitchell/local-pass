import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import App from './App';

function mapStateToProps(state) {
  return {
    accounts: state.accounts
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const Connect = connect(mapStateToProps, mapDispatchToProps)(App);

export default Connect;