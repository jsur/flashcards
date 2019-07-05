import styled from 'styled-components'

import { cardShadow } from '../styles/variables'
import media from '../styles/media'

export default styled.div`
  background-color: white;
  box-shadow: ${cardShadow};
  position: relative;
  border-radius: 5px;
  padding: 2rem;
  ${media.desktopSm`
    padding: 1.5rem;
  `}
`
