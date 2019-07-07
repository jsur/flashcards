import * as React from 'react'
import { withAuthContext } from './AuthContextProvider'

class GoogleSignIn extends React.Component {
  gapiInterval
  componentDidMount() {
    this.gapiInterval = setInterval(() => {
      if (window.gapi) {
        this.initGoogleSignIn()
      }
    }, 50)
  }

  initGoogleSignIn = () => {
    window.gapi.signin2.render(
      'g-signin',
      {
        width: 170,
        height: 50,
        onsuccess: this.onSignIn,
      },
    )
    clearInterval(this.gapiInterval)
  }

  onSignIn = (userObj) => {
    const profile = userObj.getBasicProfile()
    const googleUser = {
      name: profile.getName(),
      imageUrl: profile.getImageUrl(),
      idToken: userObj.getAuthResponse().id_token
    }
    this.props.auth.setAuthState({
      ...this.props.auth,
      googleUser
    })
  }

  onSignOut = () => {
    if (window.gapi) {
      const auth2 = window.gapi.auth2.getAuthInstance()
      auth2.signOut()
        .then(() => {
          this.props.auth.setAuthState({
            ...this.props.auth,
            googleUser: {}
          }, () => this.initGoogleSignIn())
        })
        .catch(error => console.log('error signing out!', error))
    }
  }

  render() {
    const { name, imageUrl, idToken } = this.props.auth.googleUser
    return (
      <>
        {
          idToken && (
            <>
              <p>{name}</p>
              <img src={imageUrl} alt="user-profile" />
              <button onClick={this.onSignOut}>Sign out</button>
            </>
          )
        }
        { !idToken && <div id='g-signin' /> } 
      </>
    )
  }
}

export default withAuthContext(GoogleSignIn)
