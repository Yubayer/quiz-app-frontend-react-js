import React from 'react'
import {useNavigate} from 'react-router-dom'

function ErrorPage() {
  const navigate = useNavigate()
  return (
    <div className='App'>
      <h1>404 NOT FOUND</h1>
      <button class="goto-back" onClick={() => navigate(-1)}>Goto Back</button>
    </div>
  )
}

export default ErrorPage