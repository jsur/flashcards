import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import AuthContextProvider from './AuthContextProvider'
import Heading1 from '../elements/Heading1'
import GoogleSignIn from './GoogleSignIn'
import { headerShadow } from '../styles/variables'

const HeaderWrapper = styled.div`
  background-color: white;
  box-shadow: ${headerShadow};
  position: relative;
  padding: 2rem 0 1rem 0;
`

const Header = ({ title }) => (
  <AuthContextProvider>
    <HeaderWrapper>
      <GoogleSignIn />
      <Heading1> { title }</Heading1>
    </HeaderWrapper>
  </AuthContextProvider>
)

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
