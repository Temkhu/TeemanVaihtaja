import { View, Text } from 'react-native'
import React from 'react'
import ThemeSwitchButton from '../components/ThemeSwitchButton'
import { useTheme } from '../context/useTheme'
import Styles from '../Styles'

export default function Settings() {

  const {DarkMode} = useTheme()
  console.log('Settings', DarkMode)
  return (
    <View style={[Styles.container, DarkMode ? Styles.dark : Styles.light]}>
      <Text style={DarkMode ? Styles.dark : Styles.light}> Asetukset </Text>
    <ThemeSwitchButton />
    </View>
  )
}