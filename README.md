# @jsjoeio/use-star-wars-quote

> a custom React hook that provides a random Star Wars quote

[![NPM](https://img.shields.io/npm/v/@jsjoeio/use-star-wars-quote.svg)](https://www.npmjs.com/package/@jsjoeio/use-star-wars-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jsjoeio/use-star-wars-quote
```

## Usage

```jsx
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
```

## License

MIT © [jsjoeio](https://github.com/jsjoeio)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
