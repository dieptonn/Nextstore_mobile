import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';

import search from '../assets/images/search.png';
import category from '../assets/images/category.png';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>nextstore</Text>
            <View style={styles.search}>
                <Image source={search} style={styles.searchLg}></Image>
                {/* <Text style={styles.searchText}>Search Input</Text> */}
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#A9A9A9"
                />
            </View>
            <ScrollView style={styles.scrollContent}>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Kitchen</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Bedroom</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Kitchen</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Bedroom</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Kitchen</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Bedroom</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Kitchen</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
                <View style={styles.categories}>
                    <View style={styles.categoryName}>
                        <Text style={styles.categoryTxt}>Bedroom</Text>
                    </View>
                    <Image source={category} style={styles.categoryImg}></Image>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 12,
        backgroundColor: '#ffffff',
        height: '100%',
        marginBottom: 84
    },
    scrollContent: {
        flex: 1,
        width: '90%',
        gap: 12,
    },
    name: {
        marginTop: 100,
        textAlign: 'center',
        fontFamily: 'notoserif',
        fontSize: 32,
        fontWeight: 'bold',
        lineHeight: 42,
        marginBottom: 12,
        color: '#FF8C00'
    },
    search: {
        width: '90%',
        backgroundColor: '#F5F5F5',
        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 8,
        height: 64,
        paddingHorizontal: 16,
        // justifyContent: 'center',
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
    categories: {
        width: '100%',
        backgroundColor: '#F5F5F5',
        flexDirection: 'row',
        borderRadius: 8,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    categoryImg: {
        width: 82,
        height: 100,
        borderTopRightRadius: 8, // Bo goc ben phai tren
        borderBottomRightRadius: 8, // Bo goc ben phai duoi
    },
    categoryName: {
        justifyContent: 'center',
        padding: 20
    },
    categoryTxt: {
        textAlign: 'center',
        fontFamily: 'notoserif',
        fontSize: 22,
        fontWeight: 'bold',
        lineHeight: 42,
        marginBottom: 12,
        color: '#333333'
    }
});

export default HomeScreen;
