// import React, { useState } from 'react';
// import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
// import { launchCamera } from 'react-native-image-picker';

// const ReactImagePicker = () => {
//     const [imageUri, setImageUri] = useState(null);

//     const openCamera = () => {
//         const options = {
//             mediaType: 'photo',
//             cameraType: 'back',
//         };

//         launchCamera(options, (response) => {
//             if (response.didCancel) {
//                 console.log('User cancelled image picker');
//             } else if (response.errorCode) {
//                 console.log('ImagePicker Error: ', response.errorMessage);
//             } else if (response.assets && response.assets.length > 0) {
//                 const uri = response.assets[0].uri;
//                 setImageUri(uri);
//             } else {
//                 console.log('No image selected');
//             }
//         });
//     };

//     return (
//         <View style={styles.container}>
//             <TouchableOpacity style={styles.button} onPress={openCamera}>
//                 <Text style={styles.buttonText}>Take a Photo</Text>
//             </TouchableOpacity>
//             {imageUri && (
//                 <Image source={{ uri: imageUri }} style={styles.image} />
//             )}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#f5f5f5',
//         padding: 20,
//     },
//     button: {
//         backgroundColor: '#007BFF', //
//         paddingVertical: 10,
//         paddingHorizontal: 20,
//         borderRadius: 5,
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.2,
//         shadowRadius: 4,
//         elevation: 3,
//     },
//     buttonText: {
//         color: '#fff',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
//     image: {
//         width: 300,
//         height: 300,
//         marginTop: 20,
//         borderRadius: 10,
//         borderWidth: 1,
//         borderColor: '#ddd',
//         overflow: 'hidden',
//         shadowColor: '#000',
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         elevation: 4,
//     },
// });

// export default ReactImagePicker;


import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/lens-icon.png')} resizeMode="contain" style={styles.logo3} />
      <Image source={{ uri: 'https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png' }} style={styles.logo} />
      <Image source={require('../assets/react-icon.png')} resizeMode="contain" style={styles.logo2} />
      <Text style={styles.title}>RN Social App</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      <TouchableOpacity style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <FontAwesome style={{ position: 'relative', right: 70 }} name="facebook-f" size={20} color="#3b5998" />
        <Text style={styles.facebookText}>Sign In with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.googleButton}>
        <AntDesign style={{ position: 'relative', right: 80 }} name="google" size={20} color="#db4a39" />
        <Text style={styles.googleText}>Sign In with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.createAccount}>Don't have an account? Create here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 200,
  },
  logo2: {
    width: 80,
    height: 80,
    position: 'relative',
    bottom: 90,
    right: 60
  },
  logo3: {
    width: 40,
    zIndex:999,
    height: 40,
    position: 'relative',
    top:65,
    left:45
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 30,
    color: 'red',
    marginTop:-80
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  signInButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#007bff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 15,
  },
  signInText: {
    color: '#fff',
    fontSize: 18,
  },
  forgotPassword: {
    color: '#007bff',
    marginBottom: 20,
  },
  facebookButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#d0efff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  facebookText: {
    color: '#3b5998',
    fontSize: 18,
    fontWeight: '700'
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffcbd1',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
    display: 'flex',
    flexDirection: 'row',
  },
  googleText: {
    color: '#db4a39',
    fontSize: 18,
    fontWeight: '700'
  },
  createAccount: {
    color: '#007bff',
  },
});
