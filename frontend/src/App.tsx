import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div>aaaa</div>
        <div>{count}</div>
        <button onClick={() => setCount(prev => prev + 1)}>カウントアップ</button>
      </div>
    </>
  )
}

export default App
