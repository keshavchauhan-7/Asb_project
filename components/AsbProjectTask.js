import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'; // Importing LinearGradient
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Swiper from 'react-native-swiper';
import PieChart from 'react-native-pie-chart'



const AsbProjectTask = () => {

    const widthAndHeight = 140
    const series = [170, 321]
    const sliceColor = ['blue', 'skyblue']
    return (
        <ScrollView style={styles.container}>

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
            </View>

            <View style={{ margin: 20, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }}>Auctions</Text>
                <TouchableOpacity
                    style={{
                        backgroundColor: '#3DC6C1',
                        padding: 12,
                        borderRadius: 20,
                        flexDirection: 'row',
                        gap: 10,
                        justifyContent: 'flex-between'
                    }}
                >
                    <AntDesign name="wifi" size={20} color={'#000'} />
                    <Text style={{ color: '#000', fontWeight: 'bold' }}>Live</Text>
                </TouchableOpacity>
            </View>

            <View style={{ width: '90%', height: 200, marginTop: -8, backgroundColor: '#3DC6C1', marginLeft: 20, borderRadius: 20 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                    <Image source={require('../assets/approved.png')} resizeMode="contain" style={styles.approved} />
                    <View opacity={0.7} style={{ width: '60%', height: 50, marginTop: 20, backgroundColor: 'gray', position: 'relative', bottom: 25, borderTopRightRadius: 20, borderBottomLeftRadius: 20 }}>
                        <Text style={{ textAlign: 'center', marginTop: 12, color: '#fff', fontSize: 15, fontWeight: 'bold' }}>Auction Ends In <Text style={{ color: '#3DC6C1' }}>1d 7h 6m 5s</Text></Text>
                    </View>
                </View>

                <View opacity={0.7} style={{ width: '100%', height: 80, marginTop: 10, backgroundColor: 'gray' }}>
                    <Text style={{ fontSize: 35, fontWeight: 'bold', marginLeft: 8, marginTop: 5, color: '#fff' }}>Godzilla</Text>
                    <Text style={{ fontSize: 20, marginLeft: 8, marginTop: -8, color: '#fff' }}>Spain, Santander</Text>
                </View>

            </View>

            <View style={{ marginTop: 10, alignItems: 'center', justifyContent: 'center', gap: 8, flexDirection: 'row' }}>
                <View style={{ height: 9, width: 9, borderRadius: 50, backgroundColor: '#57ebb0' }}></View>
                <View style={{ height: 8, width: 8, borderRadius: 50, backgroundColor: 'gray' }}></View>
                <View style={{ height: 8, width: 8, borderRadius: 50, backgroundColor: 'gray' }}></View>
                <View style={{ height: 8, width: 8, borderRadius: 50, backgroundColor: 'gray' }}></View>
            </View>

            <Text style={{ textAlign: 'right', marginRight: 20, color: 'orange', marginTop: -12, fontWeight: 'bold' }}>View All</Text>

            <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 10, fontWeight: 'bold', color: '#fff' }}>Trading board</Text>

            <View style={{ height: 210 }}>
                <Swiper style={styles.wrapper} showsButtons={false}
                    dotColor="grey"
                    activeDotColor="#3DC6C1"
                    paginationStyle={{
                        bottom: 10
                    }}>
                    <View style={styles.slide}>
                        <View style={styles.image}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{ height: 80, width: 80, margin: 10, borderRadius: 8 }}
                                    source={{
                                        uri: 'https://cdn.pixabay.com/photo/2024/01/06/02/44/ai-generated-8490532_640.png',
                                    }}
                                />
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Stocks in the U.S.A</Text>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>BTC U.S.A</Text>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>San Fransisco</Text>
                                </View>
                                <View style={styles.star}>
                                    <AntDesign name="star" size={30} color='#f6aa1c' />
                                </View>
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', marginTop: -7 }}>53.39</Text>
                            <Text style={{ marginLeft: 10, fontSize: 20, marginTop: -7, color: 'purple' }}>10.12%</Text>
                        </View>
                    </View>
                    <View style={styles.slide}>
                        <View style={styles.image}>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{ height: 80, width: 80, margin: 10, borderRadius: 8 }}
                                    source={{
                                        uri: 'https://cdn.pixabay.com/photo/2024/01/06/02/44/ai-generated-8490532_640.png',
                                    }}
                                />
                                <View style={{ marginTop: 10 }}>
                                    <Text style={{ fontSize: 18, color: '#fff', fontWeight: 'bold' }}>Stocks in the U.S.A</Text>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>BTC U.S.A</Text>
                                    <Text style={{ fontSize: 18, color: '#fff' }}>San Fransisco</Text>
                                </View>
                                <View style={styles.star}>
                                    <AntDesign name="star" size={30} color='#f6aa1c' />
                                </View>
                            </View>
                            <Text style={{ marginLeft: 10, fontSize: 20, fontWeight: 'bold', marginTop: -7 }}>53.39</Text>
                            <Text style={{ marginLeft: 10, fontSize: 20, marginTop: -7, color: 'purple' }}>10.12%</Text>
                        </View>
                    </View>
                </Swiper>
                <Text style={{ textAlign: 'right', marginRight: 20, color: 'orange', position:'relative', bottom:25, fontWeight: 'bold' }}>View All</Text>

            </View>

            <Text style={{ fontSize: 20, marginLeft: 20, marginTop: 10, fontWeight: 'bold', color: '#fff' }}>My Portfolio</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
                <View style={styles.portfolioBox}>

                    <View style={{ margin: 10 }}>
                        <View style={{ flexDirection: 'row', paddingBottom: 5, alignItems: 'center', gap: 2 }}>
                            <View style={{ width: 14, height: 14, backgroundColor: 'blue', borderRadius: 50 }}></View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>$32,00 <Text style={{ fontWeight: 300 }}>Cash Balance</Text></Text>
                        </View>

                        <View style={{ flexDirection: 'row', paddingBottom: 5, alignItems: 'center', gap: 2 }}>
                            <View style={{ width: 14, height: 14, backgroundColor: 'skyblue', borderRadius: 50 }}></View>
                            <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#fff' }}>85,00 <Text style={{ fontWeight: 300 }}>Units</Text></Text>
                        </View>
                        <Text style={{ fontWeight: 'bold', fontSize: 15, color: '#875692', marginLeft: 15 }}>(5412)12%</Text>
                    </View>

                </View>

                <PieChart
                    widthAndHeight={widthAndHeight}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.45}
                />

            </View>
            <Image source={require('../assets/mountain.png')} resizeMode="contain" style={styles.chartimage} />
        </ScrollView>
    );
};

export default AsbProjectTask;

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
        height: '100%', // Cover bottom half of the image with gradient
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
    approved: {
        height: 80,
        width: 80,
    },

    // wrapper: {},
    slide: {
        flex: 1,
        marginTop: 10,
        alignItems: 'center',

    },
    image: {
        width: 340,
        height: 150,
        borderRadius: 20,
        backgroundColor: '#b87333',
        borderWidth: 4,
        borderColor: '#723113'
    },
    title: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    star: {
        backgroundColor: '#723113',
        height: 50,
        borderTopRightRadius: 20,
        width: 50,
        right: -28,
        top: -4,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    portfolioBox: {
        width: 200,
        height: 100,
        backgroundColor: '#2e1503',
        borderRadius: 12,
        shadowColor: '#c36f29', // The glow color
        // shadowOffset: { width: 0, height: 0 }, // Spread the shadow evenly
        shadowOpacity: 0.9, // How intense the shadow is (for iOS)
        shadowRadius: 10, // The blur radius (for iOS)
        elevation: 5, // For Android shadow/glow
    },
    chartimage: {
        width: 50,
        height: 50,
        position: 'relative',
        left: 275,
        bottom: 95
    }
});
