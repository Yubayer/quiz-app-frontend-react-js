import React, { useContext, useState } from 'react'
import loginImg from '../images/login.svg'
import { Link, useNavigate } from 'react-router-dom'
import InputText from '../components/InputText'
import Button from '../components/Button'

import { ThemeContext } from '../Hook/ThemeContext'
import axios from 'axios'

function Login() {
    const navigate = useNavigate()
    const themeContext = useContext(ThemeContext)
    const { user, setUser } = themeContext
    const [auth, setAuth] = useState({})

    const handleSubmitFormLogin = e => {
        e.preventDefault()

        if (user.email === '' || user.password === '') {
            console.log("Please Fill up all the fields")
            return
        }
        else {
            axios.post('/user/login', auth)
                .then(res => {
                    if (res.status && res.status === 200) {
                        if (res.data.statusCode && res.data.statusCode === 500) {
                            console.log(res.data.message)
                            return
                        } else {
                            console.log(res)
                            setUser({ ...user, isAuth: true, name: res.data.name, email: res.data.email })
                            navigate('/')
                        }
                    }
                })
                .catch(err => console.log("error"))
        }

    }

    const handleInputLogin = e => {
        setAuth({ ...auth, [e.target.name]: e.target.value })
    }

    return (
        <>
            <h1>Login to your account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={loginImg} alt="Login" />
                </div>
                <form className="login form" action="#">
                    <InputText
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        icon="alternate_email"
                        onChange={handleInputLogin}
                    />

                    <InputText
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        icon="lock"
                        onChange={handleInputLogin}
                    />

                    <Button
                        type="submit"
                        onClick={handleSubmitFormLogin}
                        label={"Login"}
                    />
                    <div className="info">Don't have an account? <Link to='/register'><span>Signup</span></Link> instead.</div>
                </form>
            </div>
        </>
    )
}

export default Login