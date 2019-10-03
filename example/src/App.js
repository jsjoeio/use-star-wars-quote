import React from 'react'
import { useStarWarsQuote } from '@jsjoeio/use-star-wars-quote'

const App = () => {
  const { quote, loading } = useStarWarsQuote()

  if (loading) return <p>Loading...</p>

  if (quote) {
    return (
      <div>
        {quote}
      </div>
    )
  }

  return null
}
export default App