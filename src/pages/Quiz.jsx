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
    console.log(user)
    useEffect(() => {
        axios.get('/quiz/' + id)
            .then(res => {
                setQuestions([...questions, ...res.data.question])
            })
    }, [setQuestions])


    const handleQuestion = (id) => {
        console.log(id)
    }

    return (
        <>
            <main className="main">
                {questions.map((question, index) => (
                    <div className={`container`} key={question._id+Math.random()*1000}>
                        <h1>{question.question}</h1>
                        <h4>Question can have multiple answers</h4>

                        <div className="answers">
                            {question.options.map(option => (
                                <label className="answer" htmlFor="option1" key={option._id+Math.random()*1000}>
                                    <input type="checkbox" id="option1" />
                                    {option.option}
                                </label>
                            ))}



                        </div>

                        <div className="progressBar">
                            <div className="backButton">
                                <span className="material-icons-outlined"> arrow_back </span>
                            </div>
                            <div className="rangeArea">
                                <div className="tooltip">24% Cimplete!</div>
                                <div className="rangeBody">
                                    <div className="progress" style={{ width: "20%" }}></div>
                                </div>
                            </div>

                            <button
                             className="button next"
                             onClick={(e) => handleQuestion(question._id)}
                             >
                                <span>Next Question</span>
                                <span className="material-icons-outlined"> arrow_forward </span>
                            </button>

                        </div>

                        <div className="miniPlayer floatingBtn">
                            <span className="material-icons-outlined open"> play_circle_filled </span>
                            <span className="material-icons-outlined close"> close </span>
                            <img src={image3} alt="img" />
                            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                        </div>
                    </div>
                ))}

            </main>
        </>
    )
}

export default Quiz