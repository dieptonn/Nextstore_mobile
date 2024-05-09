import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import back2 from '../assets/images/back2.png';
import search from '../assets/images/search.png';
import { useNavigation } from '@react-navigation/native';


const ReviewScreen = () => {

    const navigation = useNavigation(); // Sử dụng hook useNavigation()

    const handleGoBack = () => {
        navigation.goBack(); // Gọi phương thức goBack() để quay lại trang trước đó
    };

    return (
        <View style={styles.container}>
            <View style={styles.naviBar}>
                <TouchableOpacity onPress={handleGoBack} >
                    <Image source={back2} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.tit}>
                    Reviews
                </Text>
                <Text style={styles.new}>
                    New review
                </Text>
            </View>
            <View style={styles.search}>
                <Image source={search} style={styles.searchLg}></Image>
                {/* <Text style={styles.searchText}>Search Input</Text> */}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#A9A9A9"
                />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        flexDirection: 'column',
        gap: 8,
        alignItems: 'center',
    },
    naviBar: {
        position: 'absolute',
        top: 60,
        // backgroundColor: '#333333',
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    back: {
        width: 24,
        height: 24,
        marginRight: 114
    },
    tit: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'notoserif',
        color: '#212121',
        marginRight: 76
    },
    new: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'notoserif',
        color: '#212121'
    },
    search: {
        position: 'absolute',
        top: 130,
        width: '92%',
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        borderRadius: 8,
        height: 64,
        paddingHorizontal: 16,
        flexDirection: 'row',
        gap: 16,
    },
    searchLg: {
        width: 24,
        height: 24,
    },
    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#333333',
    },
});

export default ReviewScreen;
