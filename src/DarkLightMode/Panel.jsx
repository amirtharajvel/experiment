import { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Panel({ title, children }) {
  const theme = useContext(ThemeContext)
  return (
    <section className={'panel-' + theme}>
      <h1>{title}</h1>
      {children}
    </section>
  )
}

export default Panel
