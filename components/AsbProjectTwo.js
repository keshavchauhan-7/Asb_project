import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
    webClientId: '471806105122-6o4d4hv20g479m61rcarg8fum4tt3otr.apps.googleusercontent.com',
});

const AsbProjectTwo = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSignup = async () => {
        if (!email.endsWith('@gmail.com')) {
            Alert.alert('Error', 'Please use a @gmail.com email address to sign up.');
            return;
        }

        try {
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert('Success', 'Sign In successfully!');
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
                            Alert.alert('Success', 'Signed in with Google successfully!');
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
            <Image source={require('../assets/asb_image.png')} resizeMode="contain" style={styles.logo} />
            <Text style={styles.title}>RN Social App</Text>

            <AntDesign style={{ position: 'relative', right: 150, top: 50 }} name="user" size={25} color="#ccc" />
            <View style={{ height: 50, borderLeftWidth: 1, borderColor: '#ccc', position: 'relative', top: 10, right: 120 }}></View>
            <TextInput
                placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
            />

            <View style={{ height: 50, borderLeftWidth: 1, borderColor: '#ccc', position: 'relative', top: 10, right: 120 }}></View>
            <TextInput
                placeholder="Password"
                style={styles.input}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <Fontisto style={{ position: 'relative', right: 150, bottom: 40 }} name="locked" size={25} color="#ccc" />

            <TouchableOpacity style={styles.signInButton} onPress={handleSignup}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.facebookButton}>
                <FontAwesome style={{ position: 'relative', right: 65 }} name="facebook-f" size={20} color="#3b5998" />
                <Text style={styles.facebookText}>Sign In with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress={onGoogleButtonPress}>
                <AntDesign style={{ position: 'relative', right: 75 }} name="google" size={20} color="#db4a39" />
                <Text style={styles.googleText}>Sign In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.createAccount}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    logo: {
        width: 170,
        height: 170,
        marginTop: 20
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#030267',
        fontStyle: 'italic',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 65,
        marginTop: -40,
    },
    signInButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#007bff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 15,
        marginTop: -8
    },
    signInText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: '700'
    },
    forgotPassword: {
        color: '#007bff',
        marginBottom: 15,
        fontSize: 18,
    },
    facebookButton: {
        width: '100%',
        height: 50,
        backgroundColor: '#d0efff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        marginBottom: 10,
        display: 'flex',
        flexDirection: 'row',
        marginTop: 20
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
        borderRadius: 4,
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
        fontSize: 18,
        marginTop: 20
    },
});

export default AsbProjectTwo;
