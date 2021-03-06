import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Heading1 from '../elements/Heading1'
import GoogleSignIn from './GoogleSignIn'
import { headerShadow } from '../styles/variables'

const HeaderWrapper = styled.div`
  background-color: white;
  box-shadow: ${headerShadow};
  position: relative;
  padding: 1rem 0 1rem 0;
  margin-bottom: 6rem;
`

const PositionedGoogleSignIn = styled(GoogleSignIn)`
`

const Header = ({ title }) => (
  <HeaderWrapper>
    <PositionedGoogleSignIn />
    <Heading1> { title }</Heading1>
  </HeaderWrapper>
)

Header.propTypes = {
  title: PropTypes.string,
}

export default Header
