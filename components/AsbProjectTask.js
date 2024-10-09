import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing LinearGradient
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';


const AsbProjectTask = () => {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    style={styles.mainImage}
                    source={{
                        uri: 'https://img.freepik.com/premium-photo/flowing-wave-abstract-background-with-wavelike-pattern-featuring-vibrant-colors_681147-27571.jpg',
                    }}
                />
                {/* Adding the gradient overlay */}
                <LinearGradient
                    colors={['transparent', 'black']}
                    style={styles.gradient}
                />
            </View>
            <View style={styles.logoText}>
                <Image source={require('../assets/mountain.png')} resizeMode="contain" style={styles.mountain} />
                <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold', position: 'relative', bottom: 20 }}>Welcome</Text>
            </View>

            <View style={{ position: 'relative', left: 312, bottom: 40, display: 'flex', flexDirection: 'row', gap: 10 }}>
                <MaterialCommunityIcons name="message" size={30} color='#606060' />
                <MaterialCommunityIcons name="account-circle" size={30} color='#ff5c00' />
            </View>

            <View style={styles.box}>

                {/* Top Gradient */}
                <LinearGradient
                    colors={['#073822', 'transparent']} // Red to transparent
                    style={styles.topGradient}
                />


                {/* Bottom Gradient */}
                <LinearGradient
                    colors={['transparent', '#422d05']} // Transparent to blue
                    style={styles.bottomGradient}
                />

                <View style={{ alignItems: 'center', marginTop: 8 }}>
                    <Text style={{ fontSize: 20, color: '#fff' }}>Did you know...</Text>
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: '#3DC6C1' }}>"Happy Birthday to You". <Text style={{ fontSize: 14, fontWeight: '500', color: '#bec2be' }}>Originally preferred by Party Hill</Text> </Text>
                        <Text style={{ fontSize: 14, marginTop: 5, fontWeight: '500', color: '#bec2be' }}>Colorful decorations and set the festive mood.</Text>
                        <Text style={{ fontSize: 14, marginTop: 5, fontWeight: '500', color: '#bec2be' }}>A birthday party is a vibrant celebration of life and joy.</Text>
                        <Text style={{ fontSize: 14, marginTop: 5, fontWeight: '500', color: '#bec2be' }}>Exciting games everyone entertained <Text style={{ color: '#fff', fontWeight: 'bold' }}>$50 million in parties</Text></Text>
                    </View>
                </View>

                <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', gap: 8, flexDirection: 'row' }}>
                    <View style={{ height: 9, width: 9, borderRadius: 50, backgroundColor: '#57ebb0' }}></View>
                    <View style={{ height: 8, width: 8, borderRadius: 50, backgroundColor: '#fff' }}></View>
                    <View style={{ height: 8, width: 8, borderRadius: 50, backgroundColor: '#fff' }}></View>
                    <View style={{ height: 8, width: 8, borderRadius: 50, backgroundColor: '#fff' }}></View>

                </View>

                <View style={{ margin: 20, marginTop:30, flexDirection:'row', justifyContent: 'space-between' }}>
                    <Text style={{ color: '#fff', fontSize:25, fontWeight:'bold' }}>Action</Text>
                    <TouchableOpacity
                        style={{
                            backgroundColor: '#3DC6C1',
                            padding: 12,
                            borderRadius: 20,
                            flexDirection:'row',
                            gap:10,
                            justifyContent:'flex-between'
                        }}
                    >
                        <AntDesign name="wifi" size={20} color={'#000'} />
                        <Text style={{ color: '#000' }}>Live</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default AsbProjectTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    imageContainer: {
        position: 'absolute', // Important to overlay the gradient on the image
        width: '100%',
        height: 150,
        zIndex: 0
    },
    mainImage: {
        width: '100%',
        height: '100%',
    },
    gradient: {
        position: 'absolute',
        zIndex: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: '140%', // Cover bottom half of the image with gradient
    },
    mountain: {
        width: 80,
        height: 80,
    },
    logoText: {
        zIndex: 1,
        position: 'relative',
        top: 40,
        left: 10
    },

    box: {
        width: '100%',
        height: 170,
        position: 'relative', // Important for layering gradients
        marginTop: 5
    },
    topGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '110%', // Cover top half
    },
    bottomGradient: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '40%', // Cover bottom half
    },
});
