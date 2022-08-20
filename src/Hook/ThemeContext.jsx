import React, { useState } from 'react'

export const ThemeContext = React.createContext()

export function ThemeContextProvider({ children }) {
   const [user, setUser] = useState({
    isAuth: false
   })
   
    return <ThemeContext.Provider value={{user: user, setUser: setUser}}>
        {children}
    </ThemeContext.Provider>
       
    
}

