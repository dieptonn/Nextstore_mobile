import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


import userEmpty from '../assets/images/emptyUser.png';
import setting from '../assets/images/setting.png';


const UserScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={setting} style={styles.imgSetting}></Image>
            <Text style={styles.TabName}>My account</Text>
            <View style={styles.content}>
                <Image source={userEmpty} style={styles.img}></Image>
                <Text style={styles.title}>come on in</Text>
                <Text style={styles.description}>
                    view orders and update your details
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('Chuyển đến trang mua sắm')}>
                    <Text style={styles.buttonText}>Continue with phone</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fff',
        width: '100%',
        height: '100%'
    },
    content: {
        alignItems: 'center',
        padding: 20,
        width: '100%',
        height: '80%',
        justifyContent: 'center',

    },
    imgSetting: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 70,
        right: 24
    },
    TabName: {
        fontSize: 32,
        fontWeight: 'bold',
        // marginLeft: 10,
        fontFamily: 'notoserif',
        color: '#FF8C00',
        marginHorizontal: 20,
        position: 'absolute',
        top: 100,
        left: 18

    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'notoserif',
        color: '#212121'
    },
    description: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        color: '#9E9E9E'
    },
    button: {
        backgroundColor: '#FF8C00',
        padding: 16,
        borderRadius: 5,
        width: '80%',
        position: 'absolute',
        bottom: 50
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'notoserif',
        fontWeight: 'bold',
    },
    img: {
        width: 120,
        height: 120,
        marginBottom: 18
    }
});

export default UserScreen;
