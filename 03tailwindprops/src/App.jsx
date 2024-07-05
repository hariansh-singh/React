import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App(props) {

  console.log("Props", props);

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test with Hariansh Singh</h1>
      <Card username="Hariansh Singh" btnText="click me"/>
      <Card username="Supreet Kaur" btnText="visit me"/>
    </>
  )
}

export default App
