import React from 'react'
import './Definitions.css'
function Definitions({ word, wordMeanings, category }) {
  return (
    <div className="meanings">
      {word === '' ? (
        <p className="fallback-definitionBox-text">Type something to Search</p>
      ) : (
        wordMeanings.map((mean) => {
          return mean.meanings.map((items) =>
            items.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{ backgroundColor: 'white', color: 'black' }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && <span>Example :{def.example}</span>}
              </div>
            ))
          )
        })
      )}
    </div>
  )
}

export default Definitions
