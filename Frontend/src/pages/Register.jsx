import { useState } from 'react'
import api from '../services/api'
import './Register.css'
import { Link, useNavigate } from 'react-router-dom'

function Register() {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    mobileno: ''
  })

  const [error, setError] = useState('')

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setError('')

    // Mobile number validation
    if (!/^\d{10}$/.test(user.mobileno)) {
      setError('Mobile number must be exactly 10 digits')
      return
    }

    api.post('/auth/register', user)
      .then(response => {
        console.log('Registration successful')
        navigate('/login')
      })
     .catch(error => {
  if (error.response?.status === 409) {
    setError(error.response.data)
  } else {
    setError('Registration failed. Please try again.')
  }

  console.error(error)
})
  }

  return (
    <div className="register-page">

      <div className="register-card">

        <h1>Create Account</h1>

        <p className="register-subtitle">
          Join RetroSwap today
        </p>

        {error && (
          <p className="error-message">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={user.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="mobileno"
            placeholder="Mobile Number"
            value={user.mobileno}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Register
          </button>

        </form>

        <p className="login-text">
          Already have an account?
          <Link to="/login"> Login</Link>
        </p>

      </div>

    </div>
  )
}

export default Register