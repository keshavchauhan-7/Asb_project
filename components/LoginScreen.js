// import React, { useState } from 'react';
// import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// // Google Sign-In configuration
// GoogleSignin.configure({
//     webClientId: '471806105122-6o4d4hv20g479m61rcarg8fum4tt3otr.apps.googleusercontent.com',
// });

// const LoginScreen = ({ navigation }) => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [isSignupSuccess, setIsSignupSuccess] = useState(false);

//     const handleLogin = async () => {
//         try {
//             await auth().signInWithEmailAndPassword(email, password);
//             navigation.navigate('UserAddScreen'); // Navigate to UserAddScreen on successful login
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const handleSignup = async () => {
//         try {
//             await auth().createUserWithEmailAndPassword(email, password);
//             navigation.navigate('UserAddScreen'); // Navigate to UserAddScreen on successful signup
//             setIsSignupSuccess(true);
//             setEmail('');
//             setPassword('');
//         } catch (error) {
//             Alert.alert('Error', error.message);
//         }
//     };

//     const onGoogleButtonPress = async () => {
//         Alert.alert(
//             'Sign in with Google',
//             'Do you want to sign in with Google?',
//             [
//                 {
//                     text: 'Cancel',
//                     style: 'cancel',
//                 },
//                 {
//                     text: 'OK',
//                     onPress: async () => {
//                         try {
//                             // Check if the device supports Google Play services
//                             await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
//                             // Get the user's ID token
//                             const { idToken } = await GoogleSignin.signIn();
//                             // Create a Google credential with the token
//                             const googleCredential = auth.GoogleAuthProvider.credential(idToken);
//                             // Sign in the user with the credential
//                             await auth().signInWithCredential(googleCredential);
//                             navigation.navigate('UserAddScreen'); // Navigate on successful sign-in
//                         } catch (error) {
//                             Alert.alert('Error', error.message);
//                         }
//                     },
//                 },
//             ],
//             { cancelable: false }
//         );
//     };

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 style={styles.input}
//                 placeholder="Email"
//                 value={email}
//                 onChangeText={setEmail}
//                 keyboardType="email-address"
//                 autoCapitalize="none"
//             />
//             <TextInput
//                 style={styles.input}
//                 placeholder="Password"
//                 value={password}
//                 onChangeText={setPassword}
//                 secureTextEntry
//                 autoCapitalize="none"
//             />
//             {isSignupSuccess && (
//                 <Text style={styles.successMessage}>Signup successful!</Text>
//             )}
//             <Button title="Login" onPress={handleLogin} color="#1E90FF" />
//             <Button title="Signup" onPress={handleSignup} color="#32CD32" />
//             <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
//                 <Text style={styles.googleButtonText}>Sign up with Google</Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 20,
//         backgroundColor: '#F0F8FF',
//     },
//     input: {
//         borderWidth: 1,
//         borderColor: '#B0C4DE',
//         borderRadius: 10,
//         padding: 15,
//         marginBottom: 15,
//         color: 'gray'
//     },
//     successMessage: {
//         color: '#32CD32',
//         fontSize: 16,
//         fontWeight: 'bold',
//         textAlign: 'center',
//         marginVertical: 10,
//     },
//     googleButton: {
//         backgroundColor: '#4285F4',
//         padding: 15,
//         borderRadius: 5,
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     googleButtonText: {
//         color: '#FFFFFF',
//         fontSize: 16,
//         fontWeight: 'bold',
//     },
// });

// export default LoginScreen;



import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Alert, Text, TouchableOpacity } from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

// Google Sign-In configuration
GoogleSignin.configure({
    webClientId: '471806105122-6o4d4hv20g479m61rcarg8fum4tt3otr.apps.googleusercontent.com',
});

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignupSuccess, setIsSignupSuccess] = useState(false);

    const handleLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('UserAddScreen'); // Navigate to UserAddScreen on successful login
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const handleSignup = async () => {
        if (!email.endsWith('@gmail.com')) {
            Alert.alert('Error', 'Please use a @gmail.com email address to sign up.');
            return;
        }

        try {
            await auth().createUserWithEmailAndPassword(email, password);
            navigation.navigate('UserAddScreen'); // Navigate to UserAddScreen on successful signup
            setIsSignupSuccess(true);
            setEmail('');
            setPassword('');
        } catch (error) {
            Alert.alert('Error', error.message);
        }
    };

    const onGoogleButtonPress = async () => {
        Alert.alert(
            'Sign in with Google',
            'Do you want to sign in with Google?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel',
                },
                {
                    text: 'OK',
                    onPress: async () => {
                        try {
                            // Check if the device supports Google Play services
                            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
                            // Get the user's ID token
                            const { idToken } = await GoogleSignin.signIn();
                            // Create a Google credential with the token
                            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
                            // Sign in the user with the credential
                            await auth().signInWithCredential(googleCredential);
                            navigation.navigate('UserAddScreen'); // Navigate on successful sign-in
                        } catch (error) {
                            Alert.alert('Error', error.message);
                        }
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                autoCapitalize="none"
            />
            {isSignupSuccess && (
                <Text style={styles.successMessage}>Signup successful!</Text>
            )}
            <Button title="Login" onPress={handleLogin} color="#1E90FF" />
            <Button title="Signup" onPress={handleSignup} color="#32CD32" />
            <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
                <Text style={styles.googleButtonText}>Sign up with Google</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F0F8FF',
    },
    input: {
        borderWidth: 1,
        borderColor: '#B0C4DE',
        borderRadius: 10,
        padding: 15,
        marginBottom: 15,
        color: 'gray'
    },
    successMessage: {
        color: '#32CD32',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    googleButton: {
        backgroundColor: '#4285F4',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    googleButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
