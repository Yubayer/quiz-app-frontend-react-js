import React, { useContext } from 'react'
import logo from '../images/logo-bg.png';
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../Hook/ThemeContext'

function Nav() {
    const themeContext = useContext(ThemeContext)
    const { user, setUser } = themeContext
    const navigate = useNavigate()

    const handleLogout = e => {
        setUser({ isAuth: false })
        if (user.isAuth)
            navigate('/login')
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">QuizApp</a>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to={'/'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to={'/quiz'}>Quiz</Link>
                            </li>
                        </ul>
                        <div className="account">
                            <span className="material-icons-outlined" title="Account">
                                account_circle
                            </span>
                            {user.isAuth ? <span>{user.email}</span> : <Link to='/login'><span>Login</span></Link>}

                            <span className="material-icons-outlined" title="Logout" onClick={handleLogout}> logout </span>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav