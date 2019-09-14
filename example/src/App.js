import React from 'react'
import { useStarWarsQuote } from '@jsjoeio/react-use-sw-quote'

const App = () => {
  const { quote, loading } = useStarWarsQuote('')
  console.log(loading, quote, 'this is my custom hook')

  if (loading) {
    return <div>Loading...</div>
  }

  if (quote) {
    return <div>
      {quote}
    </div>
  }

  return null
}
export default App