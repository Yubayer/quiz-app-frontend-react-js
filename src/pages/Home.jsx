import bannerImg from '../images/3.jpg'
import altImg from '../images/img.jpg'
import { Link } from 'react-router-dom'
import { InView } from 'react-intersection-observer';


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

    return (
        <>
            <div className="videos">

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>

                <Link to='/quiz'>
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
                                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                                <div className="qmeta">
                                    <p>10 Questions</p>
                                    <p>Score : Not taken yet</p>
                                </div>
                            </div>
                        </InView>
                    </span>
                </Link>
            </div>
        </>
    )
}

export default Home