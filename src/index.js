import { useState, useEffect } from 'react'

export function useStarWarsQuote() {
  const [quote, setQuote] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getStarWarsQuote() {
      setLoading(true)
      // Get initial text
      const response = await fetch(
        'https://starwars-quote-proxy-gi0d3x1lz.now.sh/api/randomQuote'
      )
      const data = await response.json()
      const quote = data.starWarsQuote
      setQuote(quote)
      setLoading(false)
    }
    getStarWarsQuote()
  }, [])

  return { quote, loading }
}
