import React from 'react'

function Result() {
    return (
        <>
            <div className="summary">
                <div className="point">
                    <p className="score">
                        Your score is <br />
                        5 out of 10
                    </p>
                </div>

                <div className="badge">
                    <img src="./images/success.png" alt="Success" />
                </div>
            </div>

            <div className="analysis">
                <h1>Question Analysis</h1>
                <h4>You answerd 5 out of 10 questions correctly</h4>

                <div className="question">
                    <div className="qtitle">
                        <span className="material-icons-outlined"> help_outline </span>
                        Here goes the question from Learn with Sumit?
                    </div>
                    <div className="answers">
                        <label className="answer" for="option1"> A New Hope 1 </label>

                        <label className="answer" for="option2"> A New Hope 1 </label>

                        <label className="answer" for="option3"> A New Hope 1 </label>

                        <label className="answer wrong" for="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

                        <label className="answer" for="option5"> A New Hope 1 </label>

                        <label className="answer" for="option6"> A New Hope 1 </label>

                        <label className="answer correct" for="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

                        <label className="answer" for="option8"> A New Hope 1 </label>

                        <label className="answer" for="option9"> A New Hope 1 </label>

                        <label className="answer" for="option10"> A New Hope 1 </label>
                    </div>
                </div>

                <div className="question">
                    <div className="qtitle">
                        <span className="material-icons-outlined"> help_outline </span>
                        Here goes the question from Learn with Sumit?
                    </div>
                    <div className="answers">
                        <label className="answer" for="option1"> A New Hope 1 </label>

                        <label className="answer" for="option2"> A New Hope 1 </label>

                        <label className="answer" for="option3"> A New Hope 1 </label>

                        <label className="answer wrong" for="option4"> <span>A New Hope 1</span><span>Your answer</span> </label>

                        <label className="answer" for="option5"> A New Hope 1 </label>

                        <label className="answer" for="option6"> A New Hope 1 </label>

                        <label className="answer correct" for="option7"> <span>A New Hope 1</span><span>Correct answer</span> </label>

                        <label className="answer" for="option8"> A New Hope 1 </label>

                        <label className="answer" for="option9"> A New Hope 1 </label>

                        <label className="answer" for="option10"> A New Hope 1 </label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Result