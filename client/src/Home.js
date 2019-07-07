import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'
import CardPair from './components/CardPair'
import Header from './components/Header'
import Container from './elements/Container'
import AuthContextProvider from './components/AuthContextProvider'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      flashPairs: {
        0: { id: 0, term: '', definition: '' },
      },
      selectedPairId: 0,
    }
  }

  handleTermChange = id => (e) =>  {
    this.setState(prevState => ({
      flashPairs: {
        ...prevState.flashPairs,
        [id]: {
          ...prevState.flashPairs[id],
          term: e.target.value
        }
      }
    }))
  }

  handleDefinitionChange = id => (e) =>  {
    this.setState(prevState => ({
      flashPairs: {
        ...prevState.flashPairs,
        [id]: {
          ...prevState.flashPairs[id],
          definition: e.target.value
        }
      }
    }))
  }

  addNewPair = () => {
    const lastIndex = Object.keys(this.state.flashPairs).length
    const newPair= { id: lastIndex, term: '', definition: '' }
    this.setState(prevState => ({
      selectedPairId: lastIndex,
      flashPairs: {...prevState.flashPairs, newPair }
    }))
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.addNewPair()
    }
  }

  render() {
    const { flashPairs, selectedPairId } = this.state
    return (
      <Router>
        <AuthContextProvider>
          <Layout>
            <Header title="Create your first set" />
            <Container>
              {
                Object.keys(flashPairs).map(key => (
                  <CardPair
                    key={ flashPairs[key].id }
                    id={ flashPairs[key].id }
                    term={ flashPairs[key].term }
                    definition={ flashPairs[key].definition }
                    handleTermChange={ this.handleTermChange }
                    handleDefinitionChange={ this.handleDefinitionChange }
                    handleKeyPress={ this.handleKeyPress }
                    selected={ selectedPairId === flashPairs[key].id }
                  />
                ))
              }
            </Container>
          </Layout>
        </AuthContextProvider>
      </Router>
    )
  }
}

export default Home
