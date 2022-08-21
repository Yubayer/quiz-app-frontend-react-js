import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputText from '../../components/InputText'
import { ThemeContext } from '../../Hook/ThemeContext'

const xxx = [
  {
    name: 'option1', option: null, check: false
  },
  {
    name: 'option2', option: null, check: false
  },
  {
    name: 'option3', option: null, check: false
  },
  {
    name: 'option4', option: null, check: false
  }
]

function CreateQuestion() {
  const themeContext = useContext(ThemeContext)
  const { user } = themeContext
  const [name, setName] = useState(null)
  const [mark, setMark] = useState(1)
  const [question, setQuestion] = useState(null)
  const [options, setOptions] = useState([
    {
      name: 'option1', option: null, check: false
    },
    {
      name: 'option2', option: null, check: false
    },
    {
      name: 'option3', option: null, check: false
    },
    {
      name: 'option4', option: null, check: false
    }
  ])
  const { id } = useParams()

  const handleMarkInput = e => {
    setMark(e.target.value)
  }

  const handleOptionText = e => {
    setOptions([...options].map(object => {
      if (object.name === e.target.name) {
        return {
          ...object,
          option: e.target.value
        }
      }
      else return object;
    }))
  }

  const handleOptionCheck = e => {
    setOptions([...options].map(object => {
      if (object.name === e.target.name) {
        return {
          ...object,
          check: e.target.value === 'true' ? true : false
        }
      } else {
        return object
      }
    }))
  }

  const handleQuestionInput = e => {
    setQuestion(e.target.value)
  }

  const handleSubmitQuestion = e => {
    console.log("submit")
    e.preventDefault()

    const newQuestion = {
      userId: user.id,
      quizId: id,
      mark,
      options,
      question
    }

    axios.post('/question/create', newQuestion)
      .then(res => console.log(res))
      .catch(res => console.log(res))
  }

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmitQuestion}>
        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">User</label>
          <input readOnly value={user.email} type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword3" className="form-label">Quiz</label>
          <input readOnly value={id} type="text" className="form-control" id="inputPassword3" />
        </div>

        <div className="col-md-6">
          <label htmlFor="inputEmail4" className="form-label">Question Title</label>
          <input onChange={handleQuestionInput} value={question} type="text" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputPassword4" className="form-label">Quiz</label>
          <input onChange={handleMarkInput} type="number" min={1} max={5} value={mark} className="form-control" id="inputPassword4" />
        </div>


        <div className="card border-0">
          <div className="card-header mb-2">
            <div className="text-center">
              <h5>Question Options</h5>
            </div>
          </div>
          {
            options.map(option => <div key={option.name + Math.random() * 1000}>
              <div className="card mb-2">
                <div className="card-body input-group">
                  <div className="col-md-8">
                    <label htmlFor="inputCity" className="form-label">{option.name}</label>
                    <InputText
                      onChange={handleOptionText}
                      name={option.name}
                      value={option.option}
                      type="text"
                      className="form-control"
                      id="inputCity"
                    />
                  </div>
                  <div className="col-md-3 mr-2 ml-2" style={{ margin: '0 15px' }}>
                    <label htmlFor="inputState" className="form-label">Set Answer</label>
                    <select onChange={handleOptionCheck} name={option.name} id="inputState" className="form-select">
                      <option selected={option.check ? true : false} value={true}>True</option>
                      <option selected={!option.check ? true : false} value={false} >False</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>)
          }

        </div>



        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label" htmlFor="gridCheck">
              Check me out
            </label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Sign in</button>
        </div>
      </form>
    </>
  )
}

export default CreateQuestion