import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

import back2 from '../assets/images/back2.png';
import search from '../assets/images/search.png';
import star from '../assets/images/star.png';
import notstar from '../assets/images/notstar.png';
import ava1 from '../assets/images/ava1.png';
import cmtImg1 from '../assets/images/tv1.png';
import cmtImg2 from '../assets/images/cmtImg2.png';
import cmtImg3 from '../assets/images/cmtImg3.png';



import { useNavigation } from '@react-navigation/native';


const ReviewScreen = () => {

    const navigation = useNavigation(); // Sử dụng hook useNavigation()

    const handleGoBack = () => {
        navigation.goBack(); // Gọi phương thức goBack() để quay lại trang trước đó
    };

    const navigateToNewReview = () => {
        navigation.navigate('NewReview');
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
                <TouchableOpacity onPress={navigateToNewReview}>
                    <Text style={styles.new}>
                        New review
                    </Text>
                </TouchableOpacity>
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
            <ScrollView style={styles.cmt}>
                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            Today, 12:30 pm
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Erin Mango</Text>
                    </View>
                    <Text style={styles.time}>Everything is good. Nice quality</Text>
                    <View style={styles.rv}>
                        <Image source={cmtImg1} style={styles.rvImg}></Image>
                        <Image source={cmtImg2} style={styles.rvImg}></Image>
                        <Image source={cmtImg3} style={styles.rvImg}></Image>
                    </View>
                </View>

                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            1 month ago
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Corey Rosser</Text>
                    </View>
                    <Text style={styles.time}>Could be better :(</Text>

                </View>

                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            2 months ago
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Paityn Saris</Text>
                    </View>
                    <Text style={styles.time}>Bought this TV 2 months ago and I wanted to say, this is the best TV I’ve ever used 😍</Text>

                </View>


                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            Today, 12:30 pm
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Erin Mango</Text>
                    </View>
                    <Text style={styles.time}>Everything is good. Nice quality</Text>
                    <View style={styles.rv}>
                        <Image source={cmtImg1} style={styles.rvImg}></Image>
                        <Image source={cmtImg2} style={styles.rvImg}></Image>
                        <Image source={cmtImg3} style={styles.rvImg}></Image>
                    </View>
                </View>

                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            1 month ago
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Corey Rosser</Text>
                    </View>
                    <Text style={styles.time}>Could be better :(</Text>

                </View>

                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            2 months ago
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Paityn Saris</Text>
                    </View>
                    <Text style={styles.time}>Bought this TV 2 months ago and I wanted to say, this is the best TV I’ve ever used 😍</Text>

                </View>

                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            Today, 12:30 pm
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Erin Mango</Text>
                    </View>
                    <Text style={styles.time}>Everything is good. Nice quality</Text>
                    <View style={styles.rv}>
                        <Image source={cmtImg1} style={styles.rvImg}></Image>
                        <Image source={cmtImg2} style={styles.rvImg}></Image>
                        <Image source={cmtImg3} style={styles.rvImg}></Image>
                    </View>
                </View>

                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                            <Image source={notstar} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            1 month ago
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Corey Rosser</Text>
                    </View>
                    <Text style={styles.time}>Could be better :(</Text>

                </View>

                <View style={styles.cmtDiv}>
                    <View style={styles.rating}>
                        <View style={styles.star}>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                            <Image source={star} style={styles.ratingImg}></Image>
                        </View>
                        <Text style={styles.time}>
                            2 months ago
                        </Text>
                    </View>
                    <View style={styles.user}>
                        <Image source={ava1} style={styles.ava}></Image>
                        <Text style={styles.tit}>Paityn Saris</Text>
                    </View>
                    <Text style={styles.time}>Bought this TV 2 months ago and I wanted to say, this is the best TV I’ve ever used 😍</Text>

                </View>

                <View style={styles.space}>

                </View>
            </ScrollView>
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
    cmt: {
        // position: 'absolute',
        top: 210,
        flexDirection: 'column',
        width: '100%',
        // padding: 16

    },
    cmtDiv: {
        padding: 16,
        width: '100%',
        flexDirection: 'column',
        gap: 12
    },
    rating: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    star: {
        flexDirection: 'row',
        gap: 3
    },
    ratingImg: {
        width: 16,
        height: 16,
    },
    time: {
        fontSize: 14,
        // fontWeight: 'bold',
        fontFamily: 'notoserif',
        color: '#9E9E9E',
        lineHeight: 24
    },
    user: {
        flexDirection: 'row',
        gap: 8
    },
    ava: {
        width: 24,
        height: 24
    },
    rv: {
        flexDirection: 'row',
        gap: 8
    },
    rvImg: {
        width: 54,
        height: 54
    },
    space: {
        height: 250
    }
});

export default ReviewScreen;
