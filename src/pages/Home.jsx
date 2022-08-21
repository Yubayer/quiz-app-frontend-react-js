import bannerImg from '../images/3.jpg'
import altImg from '../images/img.jpg'
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Home() {

    const handleOvserver = (view, entry) => {
        if (view) {
            let img = entry.target.querySelector("img")
            img.src = img.dataset.altSrc
        }
    }

    const handleAltImage = e => {
        e.target.src = e.target.dataset.altSrc
    }

    const handleOriginalImage = e => {
        e.target.src = e.target.dataset.src
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
            <div className="videos">

                {quizzes.map(quiz => (
                    <Link to={`/quiz/${quiz._id}`} key={quiz._id}>
                        <span>
                            <InView as="div" rootMargin="-10px -120px -330px -10px" threshold={0} triggerOnce={true} onChange={(inView, entry) => handleOvserver(inView, entry)}>
                                <div className="video">
                                    <img
                                        onMouseLeave={handleOriginalImage}
                                        onMouseEnter={handleAltImage}
                                        data-alt-src={altImg}
                                        data-src={bannerImg}
                                        src={bannerImg}
                                        alt="" />
                                    <p>{quiz.name}</p>
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

export default Home