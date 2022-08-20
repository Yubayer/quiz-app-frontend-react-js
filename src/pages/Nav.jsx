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
            <nav className="nav">
                <ul>
                    <li>
                        <Link to='/'>
                            <span className="brand">
                                <img src={logo} alt={'img-logo'} />
                                <h3>Learn with Sumit</h3>
                            </span>
                        </Link>
                    </li>
                </ul>
                <div className="account">
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    {user.isAuth ? <span>{user.email}</span> : <Link to='/register'><span>Signup</span></Link>}

                    <span className="material-icons-outlined" title="Logout" onClick={handleLogout}> logout </span>
                </div>
            </nav>
        </>
    )
}

export default Nav