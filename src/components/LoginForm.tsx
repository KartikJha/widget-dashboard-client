import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import API from '../services/api'

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await API.post('/auth/token', { username, password })
      const { token } = response.data

      localStorage.setItem('token', token)
      navigate('/widget-dashboard-client/dashboard') // Redirect to the dashboard
    } catch (err) {
      console.error('Login failed:', err)
    }
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <button type="button" onClick={(e) => {navigate('/widget-dashboard-client/signup')}}>Signup</button>
      </form>
      
    </>
  )
}

export default LoginForm
