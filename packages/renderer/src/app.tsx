import type { FC } from 'react'
import React, { useState } from 'react'
import './app.css'

const App: FC = () => {
  const [doc] = useState<string>('# Hello, World!\n')

  return <div className="app">{doc}</div>
}

export default App
