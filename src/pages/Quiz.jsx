import React, { useContext, useEffect, useState } from 'react'
import image3 from '../images/3.jpg'
import { ThemeContext } from '../Hook/ThemeContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Quiz() {
    const { id } = useParams()
    const themeContext = useContext(ThemeContext)
    const { user, setUser } = themeContext
    const [questions, setQuestions] = useState([])
    const [activeIndex, setActiveIndex] = useState(0)
    const [progress, setProgress] = useState({ width: '0%' })
    const [isFinished, setIsFinished] = useState(false)
    const [answer, setAnswer] = useState({})
    useEffect(() => {
        axios.get('/quiz/' + id)
            .then(res => {
                setQuestions([...questions, ...res.data.question])
            })
    }, [setQuestions])


    const handleAnswerAndNext = (index, id) => {
        console.log(index, questions.length)
        if (index == questions.length) {
            setIsFinished(true)
        }
        let w = 100
        let l = questions.length
        let x = w / l
        let y = index * x
        setProgress({
            width: `${y}%`
        })
        setActiveIndex(index)
    }

    const handleCheckAnswer = e => {
        console.log(e.target.checked)
    }

    return (
        <>
            <main className="main">
                {isFinished && <div className='card'>
                    <div className="card-body">
                        FInished the question
                    </div>
                </div>}
                {questions.map((question, index) => (
                    <div className={`container index-${index} ${activeIndex == index ? '' : 'd-none'}`} key={question._id + Math.random() * 1000}>
                        <h1>{question.question}</h1>
                        <h4>Question can have multiple answers</h4>

                        <div className="answers">
                            {question.options.map(option => (
                                <label className={`answer ${option.check ? 'bg-info' : ''}`} htmlFor="option1" key={option._id + Math.random() * 1000}>
                                    <input
                                        type="checkbox"
                                        id="option1"
                                        className='bg-primary'
                                        onChange={handleCheckAnswer}
                                    />
                                    {option.option}
                                </label>
                            ))}



                        </div>

                        <div className="card">
                            <div className="card-header">
                                <button onClick={(e) => handleAnswerAndNext(index + 1, question._id)} className='btn btn-info rounded-0 w-100'>Answer and Next</button>
                            </div>
                        </div>

                        <div className="miniPlayer floatingBtn">
                            <span className="material-icons-outlined open"> play_circle_filled </span>
                            <span className="material-icons-outlined close"> close </span>
                            <img src={image3} alt="img" />
                            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                        </div>
                    </div>
                ))}

                <div className='card mt-4'>
                    <div className="card-body">
                        <div className="progress">
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={progress}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100">
                                {progress.width}
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </>
    )
}

export default Quiz