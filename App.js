import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsbProject from './components/AsbProject'
import GoogleScreen from './components/GoogleScreen'
import AppNavigator from './navigation/AppNavigator'
import LoginScreen from './components/LoginScreen'
import ReactImagePicker from './components/ReactImagePicker'

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <AsbProject /> */}
      {/* <GoogleScreen/> */}
      {/* <AppNavigator/> */}
      <ReactImagePicker />
    </View>
  )
}


const styles = StyleSheet.create({})

export default App


