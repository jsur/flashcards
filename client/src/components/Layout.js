import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentArea = styled.div`
  min-height: 200vh;
  height: auto;
  margin-bottom: 0;
  background: #F9F9FD;
`

const Layout = ({ children }) => (
  <ContentArea id="main">
    { children }
  </ContentArea>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
