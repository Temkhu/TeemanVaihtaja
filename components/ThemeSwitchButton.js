import { Switch } from 'react-native-paper'
import React from 'react'
import { useTheme } from '../context/useTheme'

export default function ThemeSwitchButton() {
const { DarkMode, toggleDarkMode } = useTheme()

  return (
    <Switch value={DarkMode} onValueChange={toggleDarkMode}/>
  )
}