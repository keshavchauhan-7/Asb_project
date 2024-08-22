import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const App = () => {

  const [isSelected, setSelection] = useState(false);

  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/c0/04/e8/c004e81754823d7191f1d2d354be68ee.jpg' }} style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>


        <View style={styles.containerTwo}>

          <Text style={{ fontSize: 18, marginTop: 20, textAlign: 'center' }}>Sign up with</Text>

          <View style={styles.socialContainer}>

            <TouchableOpacity style={styles.socialButton}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image source={require('./assets/github.png')} resizeMode="contain" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>GITHUB</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <View style={{ flexDirection: 'row', gap: 10 }}>
                <Image source={require('./assets/google.png')} resizeMode="contain" style={styles.socialIcon} />
                <Text style={styles.socialButtonText}>GOOGLE</Text>
              </View>
            </TouchableOpacity>

          </View>

          <View style={{ borderBottomWidth: 1, borderColor: '#c0c0c0', marginTop: 40, width: '100%' }}></View>

          <Text style={styles.orText}>Or sign up the classic way</Text>

          <View style={{ width: '100%', marginTop: 20 }}>

            <View style={styles.inputContainer}>
              <View style={styles.input}>
                <Image source={require('./assets/graduate.png')} resizeMode="contain" style={styles.socialIcon2} />
                <Text style={{ fontSize: 20 }}>Name</Text>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.input}>
                <Image source={require('./assets/email.png')} resizeMode="contain" style={styles.socialIcon2} />
                <Text style={{ fontSize: 20 }}>Email</Text>
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.input}>
                <Image source={require('./assets/open-lock.png')} resizeMode="contain" style={styles.socialIcon2} />
                <Text style={{ fontSize: 20 }}>Password</Text>
              </View>
            </View>

          </View>


          <Text style={styles.passwordStrength}>
            password strength: <Text style={styles.strongText}>strong</Text>
          </Text>

          <View style={styles.checkboxContainer}>

            <CheckBox
              value={isSelected}
              onValueChange={setSelection}
              style={styles.checkbox}
            />

            <Text style={styles.label}>
              I agree with the <Text style={styles.linkText}>Privacy Policy</Text>
            </Text>

          </View>

          <View style={{ alignItems: 'center', justifyContent: 'center', width: '100%' }}>

            <TouchableOpacity style={styles.createAccountButton}>
              <Text style={styles.createAccountButtonText}>CREATE ACCOUNT</Text>
            </TouchableOpacity>

          </View>

        </View>
      </View>
    </ImageBackground>

  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,

  },
  containerTwo: {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 15,
    gap: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialIcon: {
    width: 20,
    height: 20,
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  socialIcon2: {
    position: 'absolute',
    left: 15,
    top: 22,
    width: 22,
    height: 22,
  },
  socialButton: {
    backgroundColor: '#fff',
    width: '40%',
    paddingVertical: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  socialButtonText: {
    color: '#3e2f84',
    fontWeight: 'bold',
    fontSize: 16,
  },
  orText: {
    marginTop: 20,
    textAlign: 'center'
  },
  input: {
    padding: 20,
    margin: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    paddingHorizontal: 50,
  },
  passwordStrength: {
    paddingHorizontal: 40,
    alignSelf: 'flex-start',
    marginTop: 10
  },
  strongText: {
    color: '#00e400',
    fontWeight: 'bold',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginTop: 30,
    padding: 20,
    gap: 5
  },
  checkbox: {
    color: '#3e2f84',
  },
  label: {
    color: '#000',
    fontSize: 18,
  },
  linkText: {
    color: '#3e2f84',
  },
  createAccountButton: {
    // marginTop: 10,
    paddingVertical: 15,
    backgroundColor: '#3e2f84',
    borderRadius: 5,
    alignItems: 'center',
    width: '50%'
  },
  createAccountButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default App;