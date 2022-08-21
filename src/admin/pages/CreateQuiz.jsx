import axios from 'axios'
import React, { useContext, useState } from 'react'
import { ThemeContext } from '../../Hook/ThemeContext'
import { useNavigate } from 'react-router-dom'

function CreateQuiz() {
  const themeContext = useContext(ThemeContext)
  const { user } = themeContext
  const [name, setName] = useState(null)
  const navigate = useNavigate()

  const handleInputQuiz = e => {
    setName(e.target.value)
  }

  const handleSubmitFormQuiz = e => {
    e.preventDefault()
    const newQuiz = {
      userId: user.id,
      name: name
    }

    axios.post('/quiz/create', newQuiz)
      .then(res => {
        console.log(res)
        navigate(-1)
      })
      .catch(res => console.log(res))
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h2 className='text-center'>Create Quiz</h2>
        </div>
        <div className="card-body">
          <form className="row g-3" onSubmit={handleSubmitFormQuiz}>
            <div className="col-md-7">
              <label for="inputEmail4" className="form-label">User</label>
              <input readOnly type="text" value={user.email} className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-7">
              <label for="inputEmail4" className="form-label">Quiz Title</label>
              <input onChange={handleInputQuiz} type="text" name='name' className="form-control" id="inputEmail4" required />
            </div>
            <div className="col-12">
              <button type="submit" className="btn btn-primary">Sign in</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default CreateQuiz