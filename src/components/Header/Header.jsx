import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider
} from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/Category'

function Header({ langugeCategory, languageSet, word, setTheWord }) {
  //material ui function that provide dark mode feature
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  })
  const onLanguageChangeHandle = (e) => {
    //on Changing of language search field should be cleared
    languageSet(e.target.value)
    setTheWord('')
  }
  return (
    <div className="header">
      <span className="title">{word ? word : 'Dict SEARCH'}</span>
      <div className="input">
        {/* theme provider will provide dark theme feature in material ui */}

        {/* search box */}
        <ThemeProvider theme={darkTheme}>
          <TextField
            id="standard-basic"
            className="search"
            label="Search"
            value={word}
            onChange={(e) => setTheWord(e.target.value)}
            // used to store the typed word in textbox
            variant="standard"
          />

          {/* language box */}
          <TextField
            id="language"
            className="select"
            select
            label="Language"
            value={langugeCategory}
            onChange={onLanguageChangeHandle}
            // {this will set the language}
          >
            {/* looping over language categories */}
            {categories.map((x) => (
              <MenuItem key={x.label} value={x.label}>
                {x.value}
              </MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
