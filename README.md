# @jsjoeio/react-use-sw-quote

> a custom React Hook for getting a random Star Wars Quote

[![NPM](https://img.shields.io/npm/v/@jsjoeio/react-use-sw-quote.svg)](https://www.npmjs.com/package/@jsjoeio/react-use-sw-quote) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @jsjoeio/react-use-sw-quote
```

## Usage

```jsx
import React from 'react'
import { useStarWarsQuote } from '@jsjoeio/react-use-sw-quote'

const App = () => {
  const { quote, loading } = useStarWarsQuote('')
  // Quote returns a random quote as a string
  // loading returns a boolean

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
```

## License

MIT © [jsjoeio](https://github.com/jsjoeio)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
