import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Styles from '../Styles'
import { useTheme } from '../context/useTheme'

export default function Home() {
  const {DarkMode} = useTheme()
  console.log('Home', DarkMode)
  return(
    <View style={[Styles.container, DarkMode ? Styles.dark : Styles.light]}>
      <Text style={DarkMode ? Styles.dark : Styles.light}> Koti </Text>
    </View>
  )
}