import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import close from '../assets/images/close.png';
import search from '../assets/images/search.png';
import star from '../assets/images/star.png';
import notstar from '../assets/images/notstar.png';
import ava1 from '../assets/images/ava1.png';
import cmtImg0 from '../assets/images/upload.png';
import cmtImg1 from '../assets/images/cmtImg1.png';
import cmtImg2 from '../assets/images/cmtImg2.png';
import cmtImg3 from '../assets/images/cmtImg3.png';
import closeRv from '../assets/images/closeRv.png';




import { useNavigation } from '@react-navigation/native';


const NewReviewScreen = () => {

    const navigation = useNavigation(); // Sử dụng hook useNavigation()

    const handleGoBack = () => {
        navigation.goBack(); // Gọi phương thức goBack() để quay lại trang trước đó
    };

    const addReview = () => {
        console.log('add new review successfully');
        navigation.goBack(); // Gọi phương thức goBack() để quay lại trang trước đó
    }

    return (
        <View style={styles.container}>
            <View style={styles.naviBar}>
                <TouchableOpacity onPress={handleGoBack} >
                    <Image source={close} style={styles.back} />
                </TouchableOpacity>
                <Text style={styles.tit}>
                    New review
                </Text>
                {/* <Text style={styles.new}>
                    New review
                </Text> */}
            </View>
            <View style={styles.rating}>
                <View style={styles.star}>
                    <Image source={star} style={styles.starImg}></Image>
                    <Image source={star} style={styles.starImg}></Image>
                    <Image source={star} style={styles.starImg}></Image>
                    <Image source={star} style={styles.starImg}></Image>
                    <Image source={notstar} style={styles.starImg}></Image>

                </View>
                <Text style={styles.starName}>
                    Nice
                </Text>
            </View>
            <View style={styles.cmt}>
                <View style={styles.cmtDiv}>
                    <Text style={styles.yourRev}>
                        Your review
                    </Text>
                    <Text style={styles.rev}>
                        Everything is good. Nice quality
                    </Text>
                </View>
                <View style={styles.photo}>
                    <Image source={cmtImg0} style={styles.rvImg}></Image>
                    <ImageBackground source={cmtImg1} style={styles.rvImg}>
                        <Image source={closeRv} style={styles.close}></Image>
                    </ImageBackground>
                    <ImageBackground source={cmtImg2} style={styles.rvImg}>
                        <Image source={closeRv} style={styles.close}></Image>
                    </ImageBackground>
                </View>

                <TouchableOpacity onPress={addReview} style={styles.btn} >
                    <Text style={styles.revBtn}>
                        Send review
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.space}>

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
    rating: {
        paddingHorizontal: 16,
        paddingVertical: 24,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: 130,
        gap: 8
    },
    star: {
        flexDirection: 'row',
        gap: 8,
    },
    starName: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'notoserif',
        color: '#9E9E9E',
        lineHeight: 24
    },
    starImg: {
        width: 32,
        height: 32,
    },
    cmt: {
        width: '92%',
        flexDirection: 'column',
        gap: 24,
        top: 150,
        height: 'auto',

    },
    cmtDiv: {
        width: '100%',
        justifyContent: 'center',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        backgroundColor: '#F5F5F5',

    },
    space: {
        height: 250
    },
    yourRev: {
        fontSize: 14,
        // fontWeight: 'bold',
        fontFamily: 'notoserif',
        color: '#9E9E9E',
        lineHeight: 24
    },
    rev: {
        fontSize: 16,
        // fontWeight: 'bold',
        fontFamily: 'notoserif',
        color: '#212121',
        lineHeight: 24
    },
    photo: {
        width: '100%',
        flexDirection: 'row',
        gap: 12
    },
    rvImg: {
        width: 64,
        height: 64,
    },
    close: {
        width: 12,
        height: 12,
        top: 8,
        right: 8,
        position: 'absolute',
    },
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FF8C00',
        borderRadius: 8,
        width: '100%',
        padding: 16,
        marginTop: 36
    },
    revBtn: {
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'notoserif',
        color: '#212121',
    }
});

export default NewReviewScreen;
