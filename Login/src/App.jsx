import './App.css'
import CreateAccount from './pages/CreateAccount';
import LoginAccount from './pages/LoginAccount'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginAccount/>} />
      <Route path="/createAccount" element={<CreateAccount/>} />
    </Routes>
  )
}

export default App
