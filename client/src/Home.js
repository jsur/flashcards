import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'
import CardPair from './components/CardPair'
import Header from './components/Header'
import Container from './elements/Container'

const Home = () => {
  const [flashSet, setValues] = useState({
    name: '',
    flashPairs: [
      { id: 1, term: '', definition: '' },
    ],
  })

  const addFlashPairs = (e, key) => {
    setValues({
      ...flashSet,
      flashPairs: {
        ...flashSet.flashPairs,
        [key]: {
          ...flashSet.flashPairs[key],
          term: e.target.value,
        },
      },
    })
  }

  return (
    <Router>
      <Layout>
        <Header title="Create your first set" />
        <Container>
          <CardPair
            term={ flashSet.flashPairs[0].term }
            definition={ flashSet.flashPairs[0].definition }
            addFlashPairs={ addFlashPairs }
          />
        </Container>
      </Layout>
    </Router>
  )
}

export default Home
