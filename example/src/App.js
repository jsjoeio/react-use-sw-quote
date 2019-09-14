import React from 'react'
import { useMyHook } from '@jsjoeio/react-use-sw-quote'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App