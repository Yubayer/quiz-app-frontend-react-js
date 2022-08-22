import React, { useContext, useState } from 'react'
import registerImg from '../images/signup.svg'
import { Link, useNavigate } from 'react-router-dom'
import { ThemeContext } from '../Hook/ThemeContext'
import InputText from '../components/InputText'
import InputCheckbox from '../components/InputCheckbox'
import Button from '../components/Button'
import axios from 'axios'

function Register() {
    const navigate = useNavigate()
    const themeContext = useContext(ThemeContext)
    const { user, setUser } = themeContext
    const [checked, setChecked] = useState(false)


    const handleSubmitForm = (e) => {
        e.preventDefault()
        if(checked){
            console.log(user)
            axios.post('/user/register', {
                name: user.name,
                email: user.email,
                password: user.password
            })
            .then(res => {
                navigate('/login')
            })
            .catch(err => console.log(err))
            
        }
    }

    const handleInput = e => {
        if(e.target.name === 'confirm'){
            if(e.target.value === user.password) console.log("pass and conf pass are matched")
            else console.log("pass and conf pass are not matched")
        }
        setUser({...user, [e.target.name]: e.target.value})
    }

    return (
        <>
            <h1>Create an account</h1>
            <div className="column">
                <div className="illustration">
                    <img src={registerImg} alt="Signup" />
                </div>
                <form className="signup form" action="#">

                    <InputText
                        type="text"
                        name="name"
                        placeholder="Enter Name"
                        icon="person"
                        onChange={handleInput}
                    />

                    <InputText
                        type="email"
                        name="email"
                        placeholder="Enter Email"
                        icon="alternate_email"
                        onChange={handleInput}
                    />

                    <InputText
                        type="password"
                        name="password"
                        placeholder="Enter password"
                        icon="lock"
                        onChange={handleInput}
                    />

                    <InputText
                        type="password"
                        name="confirm"
                        placeholder="Confirm password"
                        icon="lock_clock"
                        onChange={handleInput}
                    />

                    <InputCheckbox
                        onChange={() => setChecked(!checked)}
                        label={' I agree to the Terms & Conditions'}
                    />

                    <Button
                        type="submit"
                        onClick={handleSubmitForm}
                        label={"Register Now"}
                    />

                    <div className="info">
                        Already have an account? <Link to='/login'><span>Login</span> </Link>instead.
                    </div>
                </form>
            </div>
        </>
    )
}

export default Register