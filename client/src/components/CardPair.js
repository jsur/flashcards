import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Card from '../elements/Card'
import media from '../styles/media'

import { purpleGradient, textColor } from '../styles/variables'

const CardWrapper = styled.div`
  display: flex;
  padding: 6rem 0;
  align-items: space-between:
  ${media.phone`flex-direction: column;`};
`

const CreateCard = styled(Card)`
  width: 30%;
  margin: 0rem 5%;
  height: 13rem;
  display: flex;
  align-items: center;
  padding: 2.5rem;
  ${media.phone`width: 90%;`};
`

const TermCard = styled(CreateCard)`
`

const DefCard = styled(CreateCard)`
  background: ${purpleGradient}
`
const TextArea = styled.textarea`
  max-height: 12rem;
  width: 90%;
  outline: none;
  border: none;
  font-size: 2rem;
  font-weight: 300;
  color: ${textColor}
`

const TermInput = styled(TextArea)`
`

const DefInput = styled(TextArea)`
  background-color: transparent;
  color: white;
`

const CardPair = ({ term, definition, index }) => (
  <CardWrapper>
    <TermCard>
      <TermInput type="text" name={ term } />
    </TermCard>
    <DefCard index={ index }>
      <DefInput type="text" name={ definition } />
    </DefCard>
  </CardWrapper>
)

CardPair.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ])
}

export default CardPair
