import axios from 'axios'
import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import InputText from '../../components/InputText'
import { ThemeContext } from '../../Hook/ThemeContext'


function CreateQuestion() {
  const themeContext = useContext(ThemeContext)
  const { user } = themeContext
  const [name, setName] = useState(null)
  const [mark, setMark] = useState(1)
  const [question, setQuestion] = useState(null)

  const [option1, setOption1] = useState({ name: 'option1', option: null, check: false })
  const [option2, setOption2] = useState({ name: 'option2', option: null, check: false })
  const [option3, setOption3] = useState({ name: 'option3', option: null, check: false })
  const [option4, setOption4] = useState({ name: 'option4', option: null, check: false })

  const { id } = useParams()

  const handleMarkInput = e => {
    setMark(e.target.value)
  }

  const handleOptionText = e => {
    if (e.target.name === 'option1') {
      setOption1({ ...option1, ['option']: e.target.value })
    }
    if (e.target.name === 'option2') {
      setOption2({ ...option2, ['option']: e.target.value })
    }
    if (e.target.name === 'option3') {
      setOption3({ ...option3, ['option']: e.target.value })
    }
    if (e.target.name === 'option4') {
      setOption4({ ...option4, ['option']: e.target.value })
    }
  }

  const handleOptionCheck = e => {
    if (e.target.name === 'option1') {
      setOption1({ ...option1, ['check']: e.target.value === 'true' ? true: false })
    }
    if (e.target.name === 'option2') {
      setOption2({ ...option2, ['check']: e.target.value === 'true' ? true: false })
    }
    if (e.target.name === 'option3') {
      setOption3({ ...option3, ['check']: e.target.value === 'true' ? true: false })
    }
    if (e.target.name === 'option4') {
      setOption4({ ...option4, ['check']: e.target.value === 'true' ? true: false })
    }
  }

  const handleQuestionInput = e => {
    setQuestion(e.target.value)
  }

  const handleSubmitQuestion = e => {

    e.preventDefault()

    const newQuestion = {
      userId: user.id,
      quizId: id,
      mark,
      question,
      options: [
        option1, option2, option3, option4
      ]
    }

    axios.post('/question/create', newQuestion)
      .then(res => console.log(res))
      .catch(res => console.log(res))
  }

  return (
    <>
      <form className="row g-3" onSubmit={handleSubmitQuestion}>
        <div className="col-md-6">
          <label className="form-label">User</label>
          <InputText
            readOnly
            value={user.email}
            type="text"
            className="form-control"
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Quiz</label>
          <InputText
            readOnly
            value={id}
            type="text"
            className="form-control"
          />
        </div>

        <div className="col-md-6">
          <label className="form-label">Question Title</label>
          <InputText
            onChange={handleQuestionInput}
            value={question}
            type="text"
            className="form-control"
            required
            id="inputEmail4" />
        </div>

        <div className="col-md-6">
          <label className="form-label">Quiz</label>
          <InputText
            onChange={handleMarkInput}
            type="number"
            min={1}
            max={5}
            value={mark}
            className="form-control"
            id="inputPassword4" />
        </div>


        <div className="card border-0">
          <div className="card-header mb-2">
            <div className="text-center">
              <h5>Question Options</h5>
            </div>
          </div>
          <div className='----------------------'>

            <div className="card mb-2">
              <div className="card-body input-group">
                <div className="col-md-8">
                  <label className="form-label">{option1.name}</label>
                  <InputText
                    onChange={handleOptionText}
                    name={option1.name}

                    type="text"
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="col-md-3 mr-2 ml-2" style={{ margin: '0 15px' }}>
                  <label className="form-label">Set Answer</label>
                  <select onChange={handleOptionCheck} name={option1.name} id="inputState" className="form-select">
                    <option selected={option1.check ? true : false} value='true'>True</option>
                    <option selected={!option1.check ? true : false} value='false'>False</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card mb-2">
              <div className="card-body input-group">
                <div className="col-md-8">
                  <label className="form-label">{option2.name}</label>
                  <InputText
                    onChange={handleOptionText}
                    name={option2.name}
                    value={option2.option}
                    type="text"
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="col-md-3 mr-2 ml-2" style={{ margin: '0 15px' }}>
                  <label className="form-label">Set Answer</label>
                  <select onChange={handleOptionCheck} name={option2.name} id="inputState" className="form-select">
                    <option selected={option2.check ? true : false} value='true'>True</option>
                    <option selected={!option2.check ? true : false} value='false'>False</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card mb-2">
              <div className="card-body input-group">
                <div className="col-md-8">
                  <label className="form-label">{option3.name}</label>
                  <InputText
                    onChange={handleOptionText}
                    name={option3.name}
                    value={option3.option}
                    type="text"
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="col-md-3 mr-2 ml-2" style={{ margin: '0 15px' }}>
                  <label className="form-label">Set Answer</label>
                  <select onChange={handleOptionCheck} name={option3.name} id="inputState" className="form-select">
                    <option selected={option3.check ? true : false} value='true'>True</option>
                    <option selected={!option3.check ? true : false} value='false'>False</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="card mb-2">
              <div className="card-body input-group">
                <div className="col-md-8">
                  <label className="form-label">{option4.name}</label>
                  <InputText
                    onChange={handleOptionText}
                    name={option4.name}
                    value={option4.option}
                    type="text"
                    className="form-control"
                    id="inputCity"
                  />
                </div>
                <div className="col-md-3 mr-2 ml-2" style={{ margin: '0 15px' }}>
                  <label className="form-label">Set Answer</label>
                  <select onChange={handleOptionCheck} name={option4.name} id="inputState" className="form-select">
                    <option selected={option4.check ? true : false} value='true'>True</option>
                    <option selected={!option4.check ? true : false} value='false'>False</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
        </div>



        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" id="gridCheck" />
            <label className="form-check-label">
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