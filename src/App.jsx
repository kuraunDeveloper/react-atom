import { useState } from 'react'
import { PrimaryButton } from './components/atoms/button/PrimaryButton'
import { SecondaryButton } from './components/atoms/button/SecondaryButton'
import './App.css'

function App() {
  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>みや</SecondaryButton>
    </div>
  )
}

export default App
