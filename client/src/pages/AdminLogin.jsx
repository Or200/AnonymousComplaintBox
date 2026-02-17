import React from 'react'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
  const navigate = useNavigate()
  const adminConsole = () => {
    navigate("/admin")
  }
  return (
    <div>
      <h1>Admin login</h1>
      <hr />
      password: <input type="text" />
      <button onClick={adminConsole}>Connect</button>
    </div>
  )
}

export default AdminLogin
