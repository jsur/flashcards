// @flow

import * as React from 'react'
const AuthContext = React.createContext({})

export default class AuthContextProvider extends React.Component {
  constructor () {
    super()
    this.state = {
      googleUser: {}
    }
  }

  setAuthState = (stateObj, cb) => {
    if (typeof stateObj === 'object' && Object.keys(stateObj).length > 0) {
      this.setState(stateObj, () => {
        if (cb && typeof cb === 'function') cb()
      })
    }
  }

  render () {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          setAuthState: this.setAuthState
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export const withAuthContext = (ChildComponent) => (props) => {
  return (
    <AuthContext.Consumer>
      {
        context => <ChildComponent {...props} auth={context} />
      }
    </AuthContext.Consumer>
  )
}
