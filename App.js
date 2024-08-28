import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsbProject from './components/AsbProject'
import GoogleScreen from './components/GoogleScreen'
import AppNavigator from './navigation/AppNavigator'
import LoginScreen from './components/LoginScreen'
import ReactImagePicker from './components/ReactImagePicker'
import ReactIcon from './components/ReactIcon'
import AsbProjectTwo from './components/AsbProjectTwo'
import VideoCapture from './components/VideoCapture'
import Permissions from './components/Permissions'

const App = () => {
  return (
    <View style={{ flex: 1 }}>

      {/* <AppNavigator /> */}

      {/* <AsbProject /> */}

      {/* <GoogleScreen/> */}

      {/* <ReactImagePicker /> */}

      {/* <ReactIcon/> */}

      {/* <AsbProjectTwo /> */}

      <VideoCapture/>
      <Permissions/>

    </View>
  )
}


const styles = StyleSheet.create({})

export default App


