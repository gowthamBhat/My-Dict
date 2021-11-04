import './App.css'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Container, styled, Switch } from '@material-ui/core'

import Header from './components/Header/Header'
import Definitions from './components/Definitions/Definitions.jsx'

function App() {
  const [word, setWord] = useState('') //word that is typed in search text box
  const [wordMeanings, setMeanings] = useState([]) //meaning of word we get after searching for specific word through api call
  const [category, setcategory] = useState('en') //language option to search
  const [lightModeState, setLightMode] = useState(false)

  useEffect(() => {
    dictAPI()
  }, [category, word])

  const dictAPI = async () => {
    //method to get word meaning from api
    try {
      const { data } = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      )

      setMeanings(data) //setting the state after getting the data from specific endpoint
    } catch (error) {
      console.log(error)
    }
  }
  const LightMode = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    '& .MuiSwitch-switchBase': {
      margin: 1,
      padding: 0,
      transform: 'translateX(6px)',
      '&.Mui-checked': {
        color: '#fff',
        transform: 'translateX(22px)',
        '& .MuiSwitch-thumb:before': {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            '#fff'
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`
        },
        '& + .MuiSwitch-track': {
          opacity: 1,
          backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be'
        }
      }
    },
    '& .MuiSwitch-thumb': {
      backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
      width: 32,
      height: 32,
      '&:before': {
        content: "''",
        position: 'absolute',
        width: '100%',
        height: '100%',
        left: 0,
        top: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff'
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`
      }
    },
    '& .MuiSwitch-track': {
      opacity: 1,
      backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      borderRadius: 20 / 2
    }
  }))

  return (
    <div
      className="App"
      style={{
        backgroundColor: lightModeState ? '#fff' : '#282c34',
        height: '100vh',
        color: lightModeState ? 'black' : 'white',
        transition: 'all 0.5s linear'
      }}
    >
      {/* material ui component just like bootstrap container */}
      <Container
        maxWidth="md"
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'space-evenly'
        }}
      >
        <div
          style={{ position: 'absolute', top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{lightModeState ? 'Dark' : 'Light'} Mode</span>
          <LightMode
            checked={lightModeState}
            onChange={() => setLightMode(!lightModeState)}
          />
        </div>
        {lightModeState}
        <Header
          //passing state variables and set methods as props
          langugeCategory={category}
          languageSet={setcategory}
          word={word}
          setTheWord={setWord}
          lightModeState={lightModeState}
        />
        {/* if meaning exists then only render the defination ui */}
        {wordMeanings && (
          <Definitions
            lightModeState={lightModeState}
            word={word}
            wordMeanings={wordMeanings}
            category={category}
          />
        )}
      </Container>
    </div>
  )
}

export default App
