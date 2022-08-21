import bannerImg from '../images/3.jpg'
import altImg from '../images/img.jpg'
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import axios from 'axios'

function AllQuiz() {

    const handleOvserver = (view, entry) => {

    }

    const [quizzes, setQuizzes] = useState([])


    useEffect(() => {
        axios.get('/quiz/all')
            .then(res => {
                setQuizzes([...quizzes, ...res.data.quiz])

            })
    }, [setQuizzes])


    return (
        <>
            <div className="card-body">
                <Link className='btn btn-outline-warning w-25 rounded-0' to='/admin/create-quiz'>Create Quiz</Link>
            </div>
            <div className="videos">

                {quizzes.map(quiz => (
                    <Link to={`/quiz/${quiz._id}`} key={quiz._id}>
                        <span>
                            <InView as="div" rootMargin="-10px -120px -330px -10px" threshold={0} triggerOnce={true} onChange={(inView, entry) => handleOvserver(inView, entry)}>
                                <div className="video">
                                    <img
                                        data-alt-src={altImg}
                                        data-src={bannerImg}
                                        src={bannerImg}
                                        alt="" />
                                    <div className="qmeta">
                                        <p>{quiz.name}</p>
                                       <Link to={`/admin/create-question/${quiz._id}`}>Add Question</Link>
                                    </div>

                                    <div className="qmeta">
                                        <p>{quiz.question.length} Questions</p>
                                        <p>Score : Not taken yet</p>
                                    </div>
                                </div>
                            </InView>
                        </span>
                    </Link>
                ))}

            </div>
        </>
    )
}

export default AllQuiz