import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../components/LoginScreen';
import ReactFirebase from '../components/ReactFirebase';

const Stack = createNativeStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Firebase Account" }} />
                <Stack.Screen name="UserAddScreen" component={ReactFirebase} options={{ title: 'User Management' }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
