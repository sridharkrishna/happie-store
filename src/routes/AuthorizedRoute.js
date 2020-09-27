import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getLoggedUser } from '../utils/xhr';

class AuthorizedRoute extends React.Component {
  // Once component got mounted checks for an auth state.
  // if auth state is on pending, it redirects to /auth/login to 
  // login first.
  componentDidMount() {
    getLoggedUser()
  }

  render() {
    // destruct the props 
    const { component: Component, pending, logged, ...rest } = this.props

    return (
      <Route {...rest} render={props => {
        if (pending) return <div>Loading...</div>
        return logged
          ? <Component {...props} />
          : <Redirect to="/auth/login" />
      }} />
    )
  }
}

const mapStateToProps = ({ loggedUserState }) => ({
  pending: loggedUserState.pending,
  logged: loggedUserState.logged
})

export default connect(mapStateToProps)(AuthorizedRoute);