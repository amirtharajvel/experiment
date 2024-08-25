import { useState } from 'react'

import Form from './Form'
import ThemeContext from './ThemeContext'

export default function DarkLightMode() {
  const [theme, setTheme] = useState('light')

  return (
    <>
      <div
        style={{
          marginTop: '2%',
          border: '0px solid black',
          width: '10%',
          padding: '2%',
        }}
      >
        <label>
          <input
            type='checkbox'
            onChange={(e) => {
              setTheme(e.target.checked ? 'dark' : 'light')
            }}
          ></input>
          Dark Mode
        </label>
      </div>
      <div
        style={{
          marginTop: '20%',
          border: '2px solid black',
          width: '50%',
          padding: '2%',
        }}
        className={`panel-` + theme}
      >
        <ThemeContext.Provider value={theme}>
          <Form />
        </ThemeContext.Provider>
      </div>
    </>
  )
}
