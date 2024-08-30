import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch, Image, } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import ToggleSwitch from 'toggle-switch-react-native'
import Entypo from 'react-native-vector-icons/Entypo';


const CryptoApp = () => {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Text style={styles.headerText}>HODLINFO</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                    <View style={{ borderWidth: 1, borderRadius: 50, borderColor: '#3DC6C1', padding: 2 }}>
                        <Text style={{ color: '#3DC6C1', fontSize: 12 }}>57</Text>
                    </View>
                    <TouchableOpacity style={styles.button}>
                        <EvilIcons style={{ marginBottom: 4 }} name="sc-telegram" size={25} color="#fff" />
                        <Text style={styles.buttonText}>Connect Telegram</Text>
                    </TouchableOpacity>
                    <ToggleSwitch
                        isOn={true}
                        onColor="#2E3241"
                        thumbOnStyle={{ backgroundColor: '#3DC6C1' }}
                        size="medium"
                        onToggle={isOn => console.log("changed to : ", isOn)}
                    />

                </View>
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginTop: 20 }}>
                <View style={{ flexDirection: 'row', backgroundColor: '#2E3241', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                    <Text style={{ color: '#fff' }}>INR</Text>
                    <Entypo name="triangle-down" size={20} color="#fff" />
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#2E3241', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                    <Text style={{ color: '#fff' }}>BTC</Text>
                    <Entypo name="triangle-down" size={20} color="#fff" />
                </View>
                <View style={{ flexDirection: 'row', backgroundColor: '#2E3241', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 5 }}>
                    <Text style={{ color: '#fff' }}>BUY BTC</Text>
                </View>
            </View>


            <Text style={styles.subtitle}>Best Price to Trade</Text>
            <Text style={styles.priceText}>₹ 26,56,110</Text>
            <Text style={{ color: '#7A7D83', textAlign: 'center', fontSize: 10, marginTop: 5 }}>Average BTC/INR net price including commission</Text>

            <View style={styles.percentageContainer}>
                <View>
                    <Text style={styles.percentage}>0.1 %</Text>
                    <Text style={{ color: '#7A7D83', textAlign: 'center', fontSize: 12 }}>5 Mins</Text>
                </View>
                <View>
                    <Text style={styles.percentage}>0.96 %</Text>
                    <Text style={{ color: '#7A7D83', textAlign: 'center', fontSize: 12 }}>1 Hour</Text>
                </View><View>
                    <Text style={styles.percentage}>2.73 %</Text>
                    <Text style={{ color: '#7A7D83', textAlign: 'center', fontSize: 12 }}>1 Day</Text>
                </View><View>
                    <Text style={styles.percentage}>7.51 %</Text>
                    <Text style={{ color: '#7A7D83', textAlign: 'center', fontSize: 12 }}>7 Days</Text>
                </View>
            </View>


            <View>
                <View style={styles.heading}>
                    <Text style={styles.headingText}>#</Text>
                    <Text style={styles.headingText}>Platform</Text>
                    <Text style={styles.headingText}>{"Last Traded \n price"}</Text>
                    <Text style={styles.headingText}>{"Buy / Sell \n Price"}</Text>
                    <Text style={styles.headingText}>Difference</Text>
                    <Text style={styles.headingText}>Savings</Text>
                </View>


                <View style={styles.headingOne}>
                    <Text style={styles.headingTextOne}>1</Text>
                    <Image source={require('../assets/wazir.png')} resizeMode="contain" style={styles.icon} />
                    <Text style={styles.headingTextOne}>WazirX</Text>
                    <Text style={styles.headingTextOne}>₹ 25,72,612</Text>
                    <Text style={styles.headingTextOne}>{"₹ 25,72,610 / \n ₹ 25,72,612"}</Text>
                    <Text style={styles.headingTextNegative}>-3.14 %</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="triangle-down" size={20} color="#D35556" />
                        <Text style={styles.headingTextNegative}>₹83,498</Text>
                    </View>
                </View>

                <View style={styles.headingOne}>
                    <Text style={styles.headingTextOne}>2</Text>
                    <Image source={require('../assets/bitbns.png')} resizeMode="contain" style={styles.icon} />
                    <Text style={styles.headingTextOne}>Bitbns</Text>
                    <Text style={styles.headingTextOne}>₹ 28,83,906</Text>
                    <Text style={styles.headingTextOne}>{"₹ 28,55,164 / \n ₹ 28,82,157"}</Text>
                    <Text style={styles.headingTextPositive}>8.58 %</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="triangle-up" size={20} color="#3DC6C1" />
                        <Text style={styles.headingTextPositive}>₹27,796</Text>
                    </View>
                </View>

                <View style={styles.headingOne}>
                    <Text style={styles.headingTextOne}>3</Text>
                    <Image source={require('../assets/colodex.jpeg')} resizeMode="contain" style={styles.icon} />
                    <Text style={styles.headingTextOne}>Colodex</Text>
                    <Text style={styles.headingTextOne}>₹ 25,46,035</Text>
                    <Text style={styles.headingTextOne}>{"₹ 25,33,304 / \n ₹ 28,51,559"}</Text>
                    <Text style={styles.headingTextNegative}>-4.14 %</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Entypo name="triangle-down" size={20} color="#D35556" />
                        <Text style={styles.headingTextNegative}>₹10,074</Text>
                    </View>
                </View>

                <View style={styles.headingOne}>
                    <Text style={styles.headingTextOne}>4</Text>
                    <Image source={require('../assets/zebpay.png')} resizeMode="contain" style={styles.icon} />
                    <Text style={styles.headingTextOne}>Zebpay</Text>
                    <Text style={styles.headingTextOne}>₹ 26,50,000</Text>
                    <Text style={styles.headingTextOne}>{"₹ 26,49,999 / \n ₹ 26,21,000"}</Text>
                    <Text style={styles.headingTextNegative}>-0.23 %</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                        <Entypo name="triangle-down" size={20} color="#D35556" />
                        <Text style={styles.headingTextNegative}>₹60,110</Text>
                    </View>
                </View>


            </View>

            <TouchableOpacity style={{ borderWidth: 1, borderColor: '#3DC6C1', padding: 10, flexDirection: 'row', width: 210, alignSelf: 'center', borderRadius: 4, marginTop: 5 }}>
                <Text style={{ color: '#3DC6C1' }}>Add hodlinfo to home screen</Text>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1C1C1E',
        padding: 8,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 35,
    },
    headerText: {
        fontSize: 28,
        color: '#3DC6C1',
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    headingOne: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#2E3241',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 10,
        marginVertical: 5,
    },
    headingText: {
        color: '#7A7D83',
        fontSize: 12,
        fontWeight: 'bold'
    },
    icon: {
        borderRadius: 10,
        height: 17,
        width: 17,
        marginTop: 2,
        marginRight: -8
    },
    headingTextOne: {
        color: '#fff',
        fontSize: 12,
    },

    headingTextNegative: {
        color: '#D35556',
        fontSize: 12,
    },

    headingTextPositive: {
        color: '#3DC6C1',
        fontSize: 12,
    },
    percentageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    percentage: {
        fontSize: 20,
        color: '#3DC6C1',
    },
    priceText: {
        fontSize: 35,
        color: '#FFFFFF',
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 6
    },
    subtitle: {
        fontSize: 16,
        color: '#7A7D83',
        textAlign: 'center',
        marginTop: 20
    },
    priceTextSmall: {
        fontSize: 12,
        color: '#FFFFFF',
        flex: 2,
    },
    button: {
        backgroundColor: '#3DC6C1',
        padding: 5,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 12,
    },
});

export default CryptoApp;
