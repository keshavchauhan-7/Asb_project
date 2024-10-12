import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AsbProjectTask from '../components/AsbProjectTask';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import LoginScreen from '../components/LoginScreen';
// import ReactFirebase from '../components/ReactFirebase';

// const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();


function AppNavigator() {
    return (
        <NavigationContainer>


            {/* <Stack.Navigator>
                <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ title: "Firebase Account" }} />
                <Stack.Screen name="UserAddScreen" component={ReactFirebase} options={{ title: 'User Management' }} />
            </Stack.Navigator> */}


            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'settings' : 'settings-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#00BFA6',
                    tabBarInactiveTintColor: '#fff',
                    tabBarStyle: {
                        backgroundColor: '#723113',
                        height: 60,  // Height of the bottom tab bar
                        paddingBottom: 8,  // Padding at the bottom of the icons
                        borderTopWidth: 0,  // Remove the top border shadow
                    },
                    tabBarItemStyle: {
                        marginVertical: 5,  // Space around each tab item
                    }
                })}
            >
                <Tab.Screen name="Home" component={AsbProjectTask} options={{ headerShown: false }} />
                <Tab.Screen name="Profile" component={AsbProjectTask} options={{ headerShown: false }} />
                <Tab.Screen name="Settings" component={AsbProjectTask} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
