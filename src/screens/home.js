import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>nextstore</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    name: {
        textAlign: 'center',
        fontFamily: 'notoserif',
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 42,
    }
});

export default HomeScreen;
