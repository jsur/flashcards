import styled from 'styled-components'

import media from '../styles/media'
import { textColor } from '../styles/variables'

export default styled.h1`
  color: ${textColor};
  font-size: 2.4rem;
  font-weight: 300;
  line-height: 1.4;
  margin: 2rem 0 2.5rem 0;
  text-align: center
  ${media.phone`
    font-size: 1.9rem;
    line-height: 1.2;
  `}
`
