import { useEffect, useRef, useState } from 'react'

export default function Dom() {
  const [name, setName] = useState('')
  const renderCount = useRef(0)

  useEffect(() => {
    renderCount.current = renderCount.current + 1
  }, [])

  console.log('rendered')

  return (
    <>
      <input
        type='text'
        onChange={(e) => {
          setName(e.target.value)
        }}
      />
      {name}
      and rendered {renderCount.current} times
    </>
  )
}
