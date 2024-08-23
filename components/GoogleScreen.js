import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth'

GoogleSignin.configure({
    webClientId: '471806105122-6o4d4hv20g479m61rcarg8fum4tt3otr.apps.googleusercontent.com',
});

const GoogleScreen = () => {


    async function onGoogleButtonPress() {

        try {
            // Check if your device supports Google Play
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            auth().signInWithCredential(googleCredential);

            console.log('user signin successfully')

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <View>
            <TouchableOpacity onPress={onGoogleButtonPress}>
                <Text>Sign up with google</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({

})

export default GoogleScreen