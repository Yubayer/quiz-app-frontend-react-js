import React, { useContext } from 'react'
import { ThemeContext } from '../Hook/ThemeContext'
import {Navigate} from 'react-router-dom'

function ProtectedRoute({children}) {
    const themeContext = useContext(ThemeContext)
    const { user } = themeContext

    if(!user.isAuth) return <Navigate to='/login'/>

    return children
    
}

export default ProtectedRoute