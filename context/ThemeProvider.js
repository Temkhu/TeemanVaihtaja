import React, { useState } from 'react'
import { ThemeContext } from './ThemeContext'


export default function ThemeProvider({children}) {
    const [DarkMode, setDarkMode] = useState(false)
    const toggleDarkMode = () => {
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

  return (
    <ThemeContext.Provider value = {{ DarkMode, toggleDarkMode}}>
        {children}
    </ThemeContext.Provider>
  )
}