import { useState } from 'react'
import './App.css'
import PropertyCard from './components/propertyCard'

function App() {
  localStorage.setItem("myCat", "Tom");
  localStorage.setItem("myAge", 76);

  return (
    <>
      <PropertyCard/>
    </>
  )
}

export default App
