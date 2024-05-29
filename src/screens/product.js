import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import product from '../assets/images/product.png';
import brown from '../assets/images/brown.png';
import black from '../assets/images/black.png';
import back from '../assets/images/back.png';
import like from '../assets/images/like.png';
import close from '../assets/images/close.png';

import rArrow from '../assets/images/rArrow.png';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

import { useNavigation } from '@react-navigation/native';

const ProductScreen = () => {

    const navigation = useNavigation(); // Sử dụng hook useNavigation()

    const handleGoBack = () => {
        navigation.goBack(); // Gọi phương thức goBack() để quay lại trang trước đó
    };

    const navigateToReview = () => {
        navigation.navigate('Review');
    };


    const [showBottomSheet, setShowBottomSheet] = useState(false);

    const handleSheetChanges = useCallback((index) => {
        if (index === -1) {
            // BottomSheet đã đóng
            setShowBottomSheet(false);
        }
    }, []);

    const handleCLose = () => {
        console.log('Closed')
        setShowBottomSheet(false);
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image source={back} style={styles.headImg} />
                </TouchableOpacity>
                <Image source={like} style={styles.headImg} />
            </View>
            <ScrollView style={styles.containerDiv}>

                <Image
                    source={product}
                    style={styles.productImage}
                />
                <View style={styles.content}>
                    <Text style={styles.price}>$150.00</Text>
                    <Text style={styles.description}>
                        Wooden bedside table featuring a raised{'\n'}design on the door
                    </Text>
                    <View style={styles.color}>
                        <View style={styles.color1}>
                            <Image
                                source={brown}
                                style={styles.cycle}
                            />
                            <Text style={styles.colorText1}>Brown</Text>

                        </View>
                        <View style={styles.color2}>
                            <Image
                                source={black}
                                style={styles.cycle}
                            />
                            <Text style={styles.colorText2}>Black</Text>

                        </View>
                    </View>
                    <TouchableOpacity style={styles.button} onPress={() => console.log('Chuyển đến trang mua sắm')}>
                        <Text style={styles.buttonText}>Add to Bag</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity
                        style={styles.infoDiv}
                        onPress={() => setShowBottomSheet(true)}
                    >
                        <Text style={styles.infoTxt}>Product information</Text>
                        <Image style={styles.infoImg} source={rArrow} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoDiv} onPress={navigateToReview}>
                        <Text style={styles.infoTxt}>Reviews</Text>
                        <Text style={styles.infoNum}>32</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.space}>

                </View>
            </ScrollView >
            {showBottomSheet && (
                <BottomSheet
                    style={styles.bottomSheet}
                    enablePanDownToClose
                    snapPoints={['80%']}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <View style={styles.closeDiv}>
                            <TouchableOpacity onPress={handleCLose}>
                                <Image
                                    source={close}
                                    style={styles.close}
                                />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.ProTit}>Product information</Text>
                        <View style={styles.introDiv}>
                            <Text style={styles.intro}>introductions</Text>
                            <Text >Welcome to a world of unparalleled entertainment with Sony TV, where cutting-edge technology meets elegant design. Sony has long been a leader in the television industry, renowned for delivering exceptional picture quality, vibrant colors, and immersive sound.

                                Our latest models are equipped with 4K HDR resolution, bringing your favorite movies, shows, and games to life with stunning detail and clarity. The advanced X1 Ultimate processor enhances every scene, ensuring you see the finest textures and natural colors, even in the darkest or brightest settings.</Text>

                            <Text style={styles.intro}>details config</Text>
                            <Text >Bought this table 2 months ago and I wanted to say, this is the best bedside table I’ve ever used 😍</Text>
                            <Text >Bought this table 2 months ago and I wanted to say, this is the best bedside table I’ve ever used 😍</Text>
                            <Text >Bought this table 2 months ago and I wanted to say, this is the best bedside table I’ve ever used 😍</Text>
                        </View>
                    </BottomSheetView>
                </BottomSheet>
            )}
        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        width: '100%',
        // paddingBottom: 88
    },
    containerDiv: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        width: '100%',
        flexDirection: 'column',
    },
    head: {
        zIndex: 1,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        // backgroundColor: '#333333',
        position: 'absolute',
        top: 60,
    },
    headImg: {
        width: 36,
        height: 36,
    },
    content: {
        // position: 'absolute',
        // bottom: 120,
        padding: 15,
        width: '100%',
    },
    info: {
        width: '100%',
        backgroundColor: '#fff',
        padding: 16,
        marginTop: 18,
    },
    infoDiv: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        alignItems: 'center',
    },
    infoTxt: {
        fontSize: 16,
        // fontWeight: 'bold',
        // marginVertical: 10,
        fontFamily: 'notoserif',
        color: '#212121'
    },
    infoNum: {
        fontFamily: 'notoserif',
        color: '#9E9E9E',
        fontSize: 16,

    },
    infoImg: {
        width: 24,
        height: 24,
    },
    productImage: {
        // position: 'absolute',
        // top: 0,
        width: '100%',
        height: 500,
        // resizeMode: 'contain',
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10,
        fontFamily: 'notoserif',
        color: '#212121'
    },
    description: {
        fontSize: 16,
        // textAlign: 'center',
        // marginBottom: 20,
        color: '#9E9E9E',
        fontFamily: 'notoserif',
    },
    button: {
        backgroundColor: '#FF8C00',
        padding: 15,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
    },
    color: {
        width: '100%',
        flexDirection: 'row',
        gap: 12,
        paddingVertical: 24
    },
    color1: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#212121',
        borderRadius: 8
    },
    color2: {
        paddingHorizontal: 16,
        paddingVertical: 8,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        backgroundColor: '#E0E0E0',
        borderRadius: 8
    },
    cycle: {
        width: 18,
        height: 18
    },
    colorText1: {
        color: '#FFF',
        fontFamily: 'notoserif',
        fontSize: 14,
        fontWeight: 'bold',
    },
    colorText2: {
        color: '#212121',
        fontFamily: 'notoserif',
        fontSize: 14,
        fontWeight: 'bold',
    },
    space: {
        height: 100
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 0,
        paddingHorizontal: 16,
        gap: 24
    },
    ProTit: {
        color: '#FF8C00',
        fontFamily: 'notoserif',
        fontSize: 32,
        fontWeight: 'bold',
    },
    introDiv: {
        width: '100%',
        gap: 10
    },
    intro: {
        color: '#212121',
        fontFamily: 'notoserif',
        fontSize: 24,
        fontWeight: 'bold',
    },
    closeDiv: {
        alignItems: 'flex-start',
        width: '100%',
        // marginBottom: 15
    },
    close: {
        width: 24,
        height: 24
    }

});

export default ProductScreen;
