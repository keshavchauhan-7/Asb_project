// import React from 'react'
// import { StyleSheet, Text, View } from 'react-native'
// import AsbProject from './components/AsbProject'
// import GoogleScreen from './components/GoogleScreen'
// import AppNavigator from './navigation/AppNavigator'
// import LoginScreen from './components/LoginScreen'
// import ReactImagePicker from './components/ReactImagePicker'
// import ReactIcon from './components/ReactIcon'
// import AsbProjectTwo from './components/AsbProjectTwo'
// import VideoCapture from './components/VideoCapture'
// import Permissions from './components/Permissions'

// const App = () => {
//   return (
//     <View style={{ flex: 1 }}>

//       {/* <AppNavigator /> */}

//       {/* <AsbProject /> */}

//       {/* <GoogleScreen/> */}

//       {/* <ReactImagePicker /> */}

//       <ReactIcon/>

//       {/* <AsbProjectTwo /> */}

//       {/* <VideoCapture/> */}
//       {/* <Permissions/> */}

//     </View>
//   )
// }


// const styles = StyleSheet.create({})

// export default App


import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, ScrollView } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <Text style={styles.header}>HODLINFO</Text>


      {/* Price Display */}
      <Text style={styles.subtitle}>Best Price to Trade</Text>
      <Text style={styles.priceText}>₹ 26,56,110</Text>
      <Text style={{ color: 'gray', textAlign: 'center', fontSize: 10, marginTop: 5 }}>Average BTC/INR net price including commission</Text>

      {/* Percentage Change Indicators */}
      <View style={styles.percentageContainer}>
        <View>
          <Text style={styles.percentage}>0.1 %</Text>
          <Text style={{ color: 'gray', textAlign: 'center', fontSize: 12 }}>5 Mins</Text>
        </View>
        <View>
          <Text style={styles.percentage}>0.96 %</Text>
          <Text style={{ color: 'gray', textAlign: 'center', fontSize: 12 }}>1 Hour</Text>
        </View><View>
          <Text style={styles.percentage}>2.73 %</Text>
          <Text style={{ color: 'gray', textAlign: 'center', fontSize: 12 }}>1 Day</Text>
        </View><View>
          <Text style={styles.percentage}>7.51 %</Text>
          <Text style={{ color: 'gray', textAlign: 'center', fontSize: 12 }}>7 Days</Text>
        </View>
      </View>


      {/* Platform List */}
      <View>
      <View style={styles.heading}>
        <Text style={styles.headingText}>#</Text>
        <Text style={styles.headingText}>Platform</Text>
        <Text style={styles.headingText}>{"Last Traded \n price"}</Text>
        <Text style={styles.headingText}>{"Buy / Sell \n Price"}</Text>
        <Text style={styles.headingText}>Difference</Text>
        <Text style={styles.headingText}>Savings</Text>
      </View>

        <View style={styles.platformContainer}>
          <Text style={styles.platformNumber}>1</Text>
          <Text style={styles.platformText}> WazirX</Text>
          <Text style={styles.priceTextSmall}>₹ 25,72,612</Text>
          <Text style={styles.smallText}>₹ 25,72,610 / ₹ 25,72,612</Text>
          <Text style={styles.differenceText}>-3.14%</Text>
          <Text style={styles.savingsText}>₹ 83,498</Text>
        </View>
        <View style={styles.platformContainer}>
          <Text style={styles.platformNumber}>1</Text>
          <Text style={styles.platformText}> Bitbns</Text>
          <Text style={styles.priceTextSmall}>₹ 28,83,906</Text>
          <Text style={styles.smallText}>₹ 28,55,164 / ₹ 28,82,157</Text>
          <Text style={styles.differenceTextPositive}>8.58%</Text>
          <Text style={styles.savingsTextPositive}>₹ 2,27,796</Text>
        </View>
        <View style={styles.platformContainer}>
          <Text style={styles.platformNumber}>1</Text>
          <Text style={styles.platformText}> Colodax</Text>
          <Text style={styles.priceTextSmall}>₹ 25,46,035</Text>
          <Text style={styles.smallText}>₹ 25,33,304 / ₹ 28,51,559</Text>
          <Text style={styles.differenceText}>-4.14%</Text>
          <Text style={styles.savingsText}>₹ 1,10,074</Text>
        </View>
        <View style={styles.platformContainer}>
          <Text style={styles.platformNumber}>1</Text>
          <Text style={styles.platformText}> Zebpay</Text>
          <Text style={styles.priceTextSmall}>₹ 26,50,000</Text>
          <Text style={styles.smallText}>₹ 26,49,999 / ₹ 26,21,000</Text>
          <Text style={styles.differenceText}>-0.23%</Text>
          <Text style={styles.savingsText}>₹ 6,110</Text>
        </View>
      </View>

      {/* Connect Telegram Button */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Connect Telegram</Text>
      </TouchableOpacity>

      {/* Toggle Switch */}
      <Switch value={false} style={styles.switch} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C1C1E',
    padding: 10,
  },
  header: {
    fontSize: 28,
    color: '#00FFFF',
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  headingText: {
    color: 'gray',
    fontSize: 12,
    fontWeight: 'bold'
  },
  percentageContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  percentage: {
    fontSize: 20,
    color: '#00FFFF',
  },
  priceText: {
    fontSize: 35,
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 6
  },
  subtitle: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    marginTop: 10
  },
  priceTextSmall: {
    fontSize: 18,
    color: '#FFFFFF',
    flex: 2,
  },
  platformContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15,
    backgroundColor: '#2C2C2E',
    borderRadius: 10,
    marginVertical: 5,
  },
  platformNumber: {
    color: '#fff',
    fontSize:20
  },
  platformText: {
    fontSize: 18,
    color: '#FFFFFF',
    flex: 2,
  },
  smallText: {
    fontSize: 14,
    color: '#8E8E93',
    flex: 3,
  },
  differenceText: {
    fontSize: 16,
    color: '#FF3B30',
    flex: 1,
    textAlign: 'right',
  },
  differenceTextPositive: {
    fontSize: 16,
    color: '#4CD964',
    flex: 1,
    textAlign: 'right',
  },
  savingsText: {
    fontSize: 16,
    color: '#FF3B30',
    flex: 1,
    textAlign: 'right',
  },
  savingsTextPositive: {
    fontSize: 16,
    color: '#4CD964',
    flex: 1,
    textAlign: 'right',
  },
  button: {
    backgroundColor: '#00A3FF',
    padding: 10,
    borderRadius: 20,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
  },
  switch: {
    marginTop: 20,
    alignSelf: 'center',
  },
});

export default App;
