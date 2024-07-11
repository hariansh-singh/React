import { useState } from 'react'
import './App.css'
import AddTodo from './components/AddTodo'
import Todo from './components/Todos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-400 p-5">
      <h1 className="text-4xl font-bold text-center text-black mb-8">Learning Redux Toolkit</h1>
      <div className="max-w-3xl mx-auto bg-gray-300 p-5 rounded-lg shadow-lg">
        <AddTodo />
        <Todo />
      </div>
    </div>
  )
}

export default App
