import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './components/Layout'
import CardPair from './components/CardPair'
import Header from './components/Header'
import Container from './elements/Container'
import AuthContextProvider from './components/AuthContextProvider'

const Home = () => {
  const [flashSet] = useState({
    name: '',
    flashPairs: [
      { id: 1, term: '', definition: '' },
    ],
  })

  return (
    <Router>
      <AuthContextProvider>
        <Layout>
          <Header title="Create your first set" />
          <Container>
            <CardPair
              term={ flashSet.flashPairs[0].term }
              definition={ flashSet.flashPairs[0].definition }
            />
          </Container>
        </Layout>
      </AuthContextProvider>
    </Router>
  )
}

export default Home
