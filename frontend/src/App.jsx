import { useState } from 'react'

export default function App() {
  const [isLogin, setIsLogin] = useState(true)
  const [form, setForm] = useState({ name: '', email: '', password: '' })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const endpoint = isLogin ? '/api/v1/auth/login' : '/api/v1/auth/register'
    console.log('Submit to', endpoint, form)
  }

  return (
    <div className="page">
      <div className="card">
        <h1>{isLogin ? 'Login' : 'Register'}</h1>
        <p className="subtitle">Welcome to Basic App</p>

        <form onSubmit={handleSubmit} className="form">
          {!isLogin && (
            <input
              name="name"
              type="text"
              placeholder="Full name"
              value={form.name}
              onChange={handleChange}
              required
            />
          )}
          <input
            name="email"
            type="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? 'Login' : 'Create account'}</button>
        </form>

        <button className="linkBtn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </button>
      </div>
    </div>
  )
}
