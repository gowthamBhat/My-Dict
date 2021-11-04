import React from 'react'
import './Definitions.css'
function Definitions({ word, wordMeanings, category, lightModeState }) {
  return (
    <div className="meanings">
      {wordMeanings[0] && word && category === 'en' && (
        <audio
          src={wordMeanings[0].phonetics && wordMeanings[0].phonetics[0].audio}
          controls
        >
          Your browser does not support the audio tag.
        </audio>
      )}

      {word === '' ? (
        <p className="fallback-definitionBox-text">Type something to Search</p>
      ) : (
        wordMeanings.map((mean) => {
          return mean.meanings.map((items) =>
            items.definitions.map((def) => (
              <div
                className="singleMeaning"
                style={{
                  backgroundColor: lightModeState ? '#3b5360' : 'white',
                  color: lightModeState ? 'white' : 'black'
                }}
              >
                <b>{def.definition}</b>
                <hr style={{ backgroundColor: 'black', width: '100%' }} />
                {def.example && (
                  <span>
                    <b>Example:</b>
                    {def.example}
                  </span>
                )}

                {def.synonyms && (
                  <span>
                    {' '}
                    <b>synonyms : </b>
                    {def.synonyms.map((s) => `${s},`)}
                  </span>
                )}
              </div>
            ))
          )
        })
      )}
    </div>
  )
}

export default Definitions
