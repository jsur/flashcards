import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Card from '../elements/Card'
import media from '../styles/media'

import { purpleGradient, textColor } from '../styles/variables'

const CardWrapper = styled.div`
  display: flex;
  margin: 2.5rem 0;
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
  max-height: ${props => (props.selected ? '13rem' : '1rem')};
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
`

const DefCard = styled(CreateCard)`
  max-height: ${props => (props.selected ? '13rem' : '1rem')};
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
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

const CardPair = ({
  id, term, definition, handleTermChange, handleDefinitionChange, handleKeyPress, selected,
}) => (
  <CardWrapper>
    <TermCard selected={ selected }>
      <TermInput
        type="text"
        name={ term }
        defaultValue={ term }
        onChange={ () => handleTermChange(id)}
        onKeyPress={ handleKeyPress }
      />
    </TermCard>
    <DefCard selected={ selected }>
      <DefInput
        type="text"
        name={ definition }
        defaultValue={ definition }
        onChange={ () => handleDefinitionChange(id)}
        onKeyPress={ handleKeyPress }
      />
    </DefCard>
  </CardWrapper>
)

CardPair.propTypes = {
  id: PropTypes.number,
  term: PropTypes.string,
  definition: PropTypes.string,
  handleTermChange: PropTypes.func,
  handleDefinitionChange: PropTypes.func,
  handleKeyPress: PropTypes.func,
  selected: PropTypes.bool,
}

export default CardPair
