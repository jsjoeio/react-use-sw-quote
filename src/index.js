import React, { useState } from 'react'

export function useStarWarsQuote(initialValue) {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)

  React.useEffect(() => {
    async function getStarsWarsQuote() {
      setLoading(true)
      // Get placeholder text
      const response = await fetch('http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote')
      const data = await response.json()
      const quote = data.starWarsQuote
      setQuote(quote)
      setLoading(false)
    }
    getStarsWarsQuote()
  }, [setQuote])

  return { quote, loading }
}