import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { launchCamera } from 'react-native-image-picker';

const ReactImagePicker = () => {
    const [imageUri, setImageUri] = useState(null);

    const openCamera = () => {
        const options = {
            mediaType: 'photo',
            cameraType: 'back',
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.errorCode) {
                console.log('ImagePicker Error: ', response.errorMessage);
            } else if (response.assets && response.assets.length > 0) {
                const uri = response.assets[0].uri;
                setImageUri(uri);
            } else {
                console.log('No image selected');
            }
        });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={openCamera}>
                <Text style={styles.buttonText}>Take a Photo</Text>
            </TouchableOpacity>
            {imageUri && (
                <Image source={{ uri: imageUri }} style={styles.image} />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    button: {
        backgroundColor: '#007BFF', //
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    image: {
        width: 300,
        height: 300,
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
});

export default ReactImagePicker;
