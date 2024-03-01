import {useState} from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import {MyInputComponent} from "./components/MyComponent.tsx";
import {InputsTypes} from "./hooks/useInputs.tsx";

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
          <MyInputComponent inputType={InputsTypes.InputDoubleDate}  />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
