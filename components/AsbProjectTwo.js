import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';

const AsbProjectTwo = () => {
    return (
        <View style={styles.container}>
            <Image source={require('../assets/lens-icon.png')} resizeMode="contain" style={styles.logo3} />
            <Image source={{ uri: 'https://www.gameartguppy.com/wp-content/uploads/2019/04/mascot_firebase-logo.png' }} style={styles.logo} />
            <Image source={require('../assets/react-icon.png')} resizeMode="contain" style={styles.logo2} />
            <Text style={styles.title}>RN Social App</Text>

            <AntDesign style={{ position: 'relative', right: 150, top: 50 }} name="user" size={25} color="#ccc" />
            <View style={{ height: 50, borderLeftWidth: 1, borderColor: '#ccc', position: 'relative', top: 10, right: 120 }}></View>
            <TextInput
                // placeholder="Email"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />


            <View style={{ height: 50, borderLeftWidth: 1, borderColor: '#ccc', position: 'relative', top: 10, right: 120 }}></View>
            <TextInput
                // placeholder="Password"
                style={styles.input}
                secureTextEntry
            />
            <Fontisto style={{ position: 'relative', right: 150, bottom: 40 }} name="locked" size={25} color="#ccc" />


            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signInText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.forgotPassword}>Forgot Password?</Text>
            </TouchableOpacity>


            <TouchableOpacity style={styles.facebookButton}>
                <FontAwesome style={{ position: 'relative', right: 65 }} name="facebook-f" size={20} color="#3b5998" />
                <Text style={styles.facebookText}>Sign In with Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton}>
                <AntDesign style={{ position: 'relative', right: 75 }} name="google" size={20} color="#db4a39" />
                <Text style={styles.googleText}>Sign In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.createAccount}>Don't have an account? Create here</Text>
            </TouchableOpacity>
        </View>
    )
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
        zIndex: 999,
        height: 40,
        position: 'relative',
        top: 65,
        left: 45
    },
    title: {
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#030267',
        marginTop: -80,
        fontStyle: 'italic',
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 10,
        marginTop: -40,
        color: 'red'
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


export default AsbProjectTwo

