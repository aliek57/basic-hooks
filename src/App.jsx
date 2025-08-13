import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === "dark" ? "dark-theme" : ""}`}>
      <h1>Hooks do React</h1>
      <Navbar />
      <Outlet/>
      <p>A troca de cor de tema é fornecida pelo Context</p>
      <p id='info'>O tema atual é: <span className='highlight'>{theme}</span></p>
      <div className='theme-toggle'>
        <h4>Mudar tema</h4>
        <label class="switch">
          <input 
            type="checkbox"
            onChange={toggleTheme}
          />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  )
}

export default App
