import { ThemeProvider } from './context/ThemeContext'
import React from 'react'
import ThemedLayout from './components/ThemedLayout'


function App() {

  return (
    <ThemeProvider>
      <ThemedLayout/>
    </ThemeProvider>
  )
}

export default App
