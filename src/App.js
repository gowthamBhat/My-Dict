import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core'
import Header from './components/Header/Header'

function App() {
  useEffect(() => {
    dictAPI()
  }, [])
  const [meanings, setMeanings] = useState([])

  const dictAPI = async () => {
    const { data } = await axios.get(
      'https://api.dictionaryapi.dev/api/v2/entries/en/mother'
    )
    setMeanings(data)
  }
  console.log(meanings)

  return (
    <div
      className="App"
      style={{ backgroundColor: '#282c34', height: '100vh', color: 'white' }}
    >
      <Container
        maxWidth="md"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header />
      </Container>
    </div>
  )
}

export default App
