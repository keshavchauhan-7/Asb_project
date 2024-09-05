import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, Alert, Platform } from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';

const FingerPrintScreen = () => {
  const [biometricAvailable, setBiometricAvailable] = useState(false);

  useEffect(() => {
    try {
      // Check if biometric authentication is available
      FingerprintScanner.isSensorAvailable()
        .then(biometryType => {
          console.log('Biometric type:', biometryType); // Log the available biometric type
          setBiometricAvailable(true);
        })
        .catch(error => {
          console.log('Error checking sensor availability:', error.message);
          setBiometricAvailable(false);
        });
    } catch (error) {
      console.log('Error initializing FingerprintScanner:', error.message);
    }

    return () => {
      try {
        FingerprintScanner.release();
      } catch (error) {
        console.log('Error releasing FingerprintScanner:', error.message);
      }
    };
  }, []);

  const handleFingerprintAuthentication = () => {
    if (biometricAvailable) {
      FingerprintScanner.authenticate({ description: 'Scan your fingerprint' })
        .then(() => {
          Alert.alert('Authenticated', 'You have been successfully authenticated');
        })
        .catch(error => {
          Alert.alert('Authentication Failed', error.message);
        });
    } else {
      Alert.alert('Error', 'Biometric Authentication is not available');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {biometricAvailable ? (
        <TouchableOpacity
          onPress={handleFingerprintAuthentication}
          style={{
            backgroundColor: '#6200ee',
            paddingVertical: 10,
            paddingHorizontal: 20,
            borderRadius: 5,
          }}>
          <Text style={{ color: 'white', fontSize: 18 }}>Use Fingerprint</Text>
        </TouchableOpacity>
      ) : (
        <Text>Biometric Authentication is not available</Text>
      )}
    </View>
  );
};

export default FingerPrintScreen;
