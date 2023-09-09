import './App.css'
import Friends from './Friends'
import Team from './Team'
import Users from './Users'
import Counter from './counter'

function App() {
  function handleClick(){
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      
      <h1>React Core Concepts</h1>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('third clicked')}}>third</button>
      <button onClick={() => addToFive(5)}>Four</button>
    </>
  )
}

export default App
