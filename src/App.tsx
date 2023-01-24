import Todo from './models/todo'
import Todos from './components/Todos'
import './App.css'

function App() {
  const todos = [
      new Todo('Learn React'),
      new Todo('Learn Typescript')
    ]
  

  return (
    <Todos items={todos} />
  )
}

export default App
