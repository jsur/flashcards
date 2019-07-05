import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ContentArea = styled.div`
  min-height: 100vh;
  margin-bottom: 0rem;
  background: #F9F9FD;
`

const Layout = ({ children }) => (
  <div>
    <ContentArea id="main">
      { children }
    </ContentArea>
  </div>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Layout
