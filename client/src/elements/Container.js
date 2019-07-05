import styled from 'styled-components'

import media from '../styles/media'

export default styled.div`
  margin: 0 auto;
  width: 75%;
  ${media.desktopSm`width: 80%`};
  ${media.tablet`width: 90%`};
`
