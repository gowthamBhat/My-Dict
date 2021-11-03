import {
  createTheme,
  MenuItem,
  TextField,
  ThemeProvider
} from '@material-ui/core'
import React from 'react'
import './Header.css'
import categories from '../../data/Category'

function Header() {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff'
      },
      type: 'dark'
    }
  })
  return (
    <div className="header">
      <span className="title">Dict SEARCH</span>
      <div className="input">
        <ThemeProvider theme={darkTheme}>
          <TextField id="standard-basic" label="Search" variant="standard" />
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            helperText="Select your language"
          >
            {categories.map((x) => (
              <MenuItem key={x.label}>{x.value}</MenuItem>
            ))}
          </TextField>
        </ThemeProvider>
      </div>
    </div>
  )
}

export default Header
