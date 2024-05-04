import React, { useEffect } from 'react';
import { View, ActivityIndicator, StyleSheet, Text, Image } from 'react-native';

import Logo from '../assets/images/loading.png';

const LoadingScreen = ({ navigation }) => {
    useEffect(() => {
        // Đợi một khoảng thời gian (ví dụ: 2 giây) và sau đó điều hướng đến trang chủ
        setTimeout(() => {
            navigation.replace('Home'); // Điều hướng đến trang chủ
        }, 2000);
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#FF8C00" />
            <View style={styles.logoContainer}>
                <Image source={Logo} style={styles.logo} />
                <Text style={styles.name}>nextstore</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8C00',
    },
    logoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    logo: {
        width: 50, // Đặt chiều rộng của logo
        height: 50, // Đặt chiều cao của logo
        marginVertical: 10,
    },
    name: {
        color: '#FFFFFF',
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontSize: 32,
        fontWeight: 'bold', // Thay thế fontWeight bằng 'bold'
        lineHeight: 42,
    }
});

export default LoadingScreen;
