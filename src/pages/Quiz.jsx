import React, { useContext } from 'react'
import image3 from '../images/3.jpg'
import { ThemeContext } from '../Hook/ThemeContext'

function Quiz() {

    const themeContext = useContext(ThemeContext)
    const {user, setUser} = themeContext
    console.log(user)

    return (
        <>
            <main className="main">
                <div className="container">
                    <h1>Pick three of your favorite Star Wars Flims</h1>
                    <h4>Question can have multiple answers</h4>

                    <div className="answers">
                        <label className="answer" htmlFor="option1">
                            <input type="checkbox" id="option1" />
                            A New Hope 1
                        </label>

                        <label className="answer" htmlFor="option2">
                            <input type="checkbox" id="option2" />
                            A New Hope 1
                        </label>

                        <label className="answer" htmlFor="option3">
                            <input type="checkbox" id="option3" />
                            A New Hope 1
                        </label>

                        <label className="answer wrong" htmlFor="option4">
                            <input type="checkbox" id="option4" />
                            A New Hope 1
                        </label>

                        <label className="answer" htmlFor="option5">
                            <input type="checkbox" id="option5" />
                            A New Hope 1
                        </label>

                        <label className="answer" htmlFor="option6">
                            <input type="checkbox" id="option6" />
                            A New Hope 1
                        </label>

                        <label className="answer correct" htmlFor="option7">
                            <input type="checkbox" id="option7" />
                            A New Hope 1
                        </label>

                        <label className="answer" htmlFor="option8">
                            <input type="checkbox" id="option8" />
                            A New Hope 1
                        </label>

                        <label className="answer" htmlFor="option9">
                            <input type="checkbox" id="option9" />
                            A New Hope 1
                        </label>

                        <label className="answer" htmlFor="option10">
                            <input type="checkbox" id="option10" />
                            A New Hope 1
                        </label>
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

                        <button className="button next">
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
            </main>
        </>
    )
}

export default Quiz