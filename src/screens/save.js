import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';


import bagEmpty from '../assets/images/emptybag.png';

const SaveScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.TabName}>Saved items</Text>
            <View style={styles.content}>
                <Image source={bagEmpty} style={styles.img}></Image>
                <Text style={styles.title}>nothing saved...</Text>
                <Text style={styles.description}>
                    ... no worries. Start saving as you shop{'\n'}by clicking the little heart
                </Text>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => console.log('Chuyển đến trang mua sắm')}>
                    <Text style={styles.buttonText}>Start shopping</Text>
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

export default SaveScreen;
