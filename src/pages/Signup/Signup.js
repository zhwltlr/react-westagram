import React from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
  const navigate = useNavigate()
  return (
    <h1>
      singup
      <button
        onClick={() => {
          navigate('/main')
        }}
      >
        main
      </button>
    </h1>
  )
}
export default Signup
