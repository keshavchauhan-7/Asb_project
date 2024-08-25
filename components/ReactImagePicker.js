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

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}} style={styles.logo} />
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
        <Text style={styles.facebookText}>Sign In with Facebook</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.googleButton}>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
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
    backgroundColor: '#3b5998',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 10,
  },
  facebookText: {
    color: '#fff',
    fontSize: 18,
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#db4a39',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 30,
  },
  googleText: {
    color: '#fff',
    fontSize: 18,
  },
  createAccount: {
    color: '#007bff',
  },
});
