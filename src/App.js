import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container } from '@material-ui/core'
import Header from './components/Header/Header'

function App() {
  useEffect(() => {
    dictAPI()
  }, [])
  const [word, setWord] = useState('') //word that is typed in search text box
  const [meanings, setMeanings] = useState([]) //meaning of word we get after searching for specific word through api call
  const [category, setcategory] = useState('en') //language option to search

  const dictAPI = async () => {
    //method to get word meaning from api
    try {
      const { data } = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/mother'
      )
      setMeanings(data) //setting the state after getting the data from specific endpoint
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div
      className="App"
      style={{ backgroundColor: '#282c34', height: '100vh', color: 'white' }}
    >
      {/* material ui component just like bootstrap container */}
      <Container
        maxWidth="md"
        style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}
      >
        <Header
          //passing state variables and set methods as props
          langugeCategory={category}
          languageSet={setcategory}
          word={word}
          setTheWord={setWord}
        />
      </Container>
    </div>
  )
}

export default App
