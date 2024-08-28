import React, { useEffect } from 'react';
import { PermissionsAndroid, Platform, Alert } from 'react-native';
import { check, request, PERMISSIONS, RESULTS } from 'react-native-permissions';

const requestPermissions = async () => {
    if (Platform.OS === 'android') {
        const granted = await PermissionsAndroid.requestMultiple([
            PermissionsAndroid.PERMISSIONS.CAMERA,
            PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        ]);

        if (
            granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.WRITE_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED &&
            granted['android.permission.READ_EXTERNAL_STORAGE'] === PermissionsAndroid.RESULTS.GRANTED
        ) {
            console.log('You can use the camera and audio');
        } else {
            Alert.alert('Permissions required', 'You need to grant all permissions to use the camera and record audio.');
        }
    } else {
        const cameraStatus = await check(PERMISSIONS.IOS.CAMERA);
        const microphoneStatus = await check(PERMISSIONS.IOS.MICROPHONE);

        if (cameraStatus !== RESULTS.GRANTED) {
            await request(PERMISSIONS.IOS.CAMERA);
        }

        if (microphoneStatus !== RESULTS.GRANTED) {
            await request(PERMISSIONS.IOS.MICROPHONE);
        }
    }
};

const Permissions = () => {
    useEffect(() => {
        requestPermissions();
    }, []);

    return null;
};

export default Permissions;
