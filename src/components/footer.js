import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import home from '../assets/images/home.png';
import bag from '../assets/images/bag.png';
import heart from '../assets/images/heart.png';
import user from '../assets/images/user.png';

const Footer = () => {
    const navigation = useNavigation();
    const [selectedIcon, setSelectedIcon] = useState('home');

    const navigateToHome = () => {
        navigation.navigate('Home');
        setSelectedIcon('home');
    };

    const navigateToCart = () => {
        navigation.navigate('Cart');
        setSelectedIcon('cart');
    };
    const navigateToSave = () => {
        navigation.navigate('Save');
        setSelectedIcon('save');
    };
    const navigateToUser = () => {
        navigation.navigate('User');
        setSelectedIcon('user');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.div}
                onPress={navigateToHome}
            >
                <Image
                    source={home}
                    style={[styles.img, selectedIcon === 'home' && styles.selectedIcon]}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.div}
                onPress={navigateToCart}
            >
                <Image
                    source={bag}
                    style={[styles.img, selectedIcon === 'cart' && styles.selectedIcon]}
                />
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.div}
                onPress={navigateToSave} >
                <Image source={heart}
                    style={[styles.img, selectedIcon === 'save' && styles.selectedIcon]}></Image>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.div}
                onPress={navigateToUser}
            >
                <Image
                    source={bag}
                    style={[styles.img, selectedIcon === 'user' && styles.selectedIcon]}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        // height: 64,
        // marginBottom: 20,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#F5F5F5'
    },
    div: {
        width: '25%',
        height: '100%',
        paddingHorizontal: 31,
        paddingVertical: 26,
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    img: {
        width: 32,
        height: 32,
    },
    selectedIcon: {
        tintColor: '#FF8C00', // Thay đổi màu của icon khi được chọn
    },
});

export default Footer;
