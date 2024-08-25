import { useContext } from 'react'
import ThemeContext from './ThemeContext'

function Button({ name }) {
  const theme = useContext(ThemeContext)

  return <button className={`panel-` + theme}>{name}</button>
}

export default Button
