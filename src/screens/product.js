// --- File: src/screens/product.js (Viết lại hoàn toàn) ---
import React, { useCallback, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';

// Import các icon cần thiết
import backIcon from '../assets/images/back.png';
import likeIcon from '../assets/images/like.png';
import closeIcon from '../assets/images/close.png';
import rArrowIcon from '../assets/images/rArrow.png';
import filledStarIcon from '../assets/images/star.png';
import emptyStarIcon from '../assets/images/notstar.png';

// Hàm tiện ích format giá tiền (có thể tạo file utils.js riêng để dùng chung)
const formatPrice = (price) => {
    const numericPrice = Number(price);
    if (isNaN(numericPrice)) return 'N/A';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericPrice);
};

const StarRating = ({ rating, maxRating = 5, starSize = 20 }) => {
    const numericRating = Number(rating);
    const starArray = [...Array(maxRating).keys()];

    return (
        <View style={styles.starContainer}>
            {starArray.map((index) => (
                <Image
                    key={index}
                    source={index < numericRating ? filledStarIcon : emptyStarIcon}
                    style={{ width: starSize, height: starSize }}
                />
            ))}
        </View>
    );
};

const ProductScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();

    // 1. Nhận dữ liệu sản phẩm từ params
    const { productData } = route.params;

    // Fallback nếu dữ liệu không được truyền qua
    if (!productData) {
        return (
            <View style={styles.centered}>
                <Text>Không tìm thấy dữ liệu sản phẩm.</Text>
            </View>
        );
    }

    const [showBottomSheet, setShowBottomSheet] = useState(false);

    const handleGoBack = () => navigation.goBack();
    const navigateToReview = () => navigation.navigate('Review', { productId: productData._id });
    const handleSheetChanges = useCallback((index) => {
        if (index === -1) setShowBottomSheet(false);
    }, []);
    const handleCloseBottomSheet = () => setShowBottomSheet(false);

    const specifications = [
        { label: 'Price', value: formatPrice(productData.price_sale) },
        { label: 'Rating', value: productData.rating, reviews: productData.rating_number, type: 'rating' },
    ];
    if (productData.size) {
        specifications.push({ label: 'Size', value: productData.size });
    }
    if (productData.resolution) {
        specifications.push({ label: 'Resolution', value: productData.resolution });
    }

    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Image source={backIcon} style={styles.headImg} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={likeIcon} style={styles.headImg} />
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                {/* 2. Hiển thị ảnh sản phẩm động */}
                <View style={styles.imageContainer}>
                    <Image
                        source={{ uri: productData.product_img }}
                        style={styles.productImage} // style của Image không đổi
                    />
                </View>
                <View style={styles.content}>
                    {/* 3. Hiển thị giá và tên sản phẩm động */}
                    <Text style={styles.price}>{formatPrice(productData.price_sale)}</Text>
                    <Text style={styles.description}>{productData.name}</Text>

                    {/* Phần chọn màu đã bị ẩn vì API không cung cấp dữ liệu này */}

                    <TouchableOpacity style={styles.button} onPress={() => console.log('Thêm vào giỏ hàng:', productData.name)}>
                        <Text style={styles.buttonText}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.info}>
                    <TouchableOpacity
                        style={styles.infoDiv}
                        onPress={() => setShowBottomSheet(true)}
                    >
                        <Text style={styles.infoTxt}>Product information</Text>
                        <Image style={styles.infoImg} source={rArrowIcon} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.infoDiv} onPress={navigateToReview}>
                        <Text style={styles.infoTxt}>Reviews</Text>
                        {/* 4. Hiển thị số lượng đánh giá động */}
                        <Text style={styles.infoNum}>{productData.rating_number || 0}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.space} />
            </ScrollView>
            {showBottomSheet && (
                <BottomSheet
                    enablePanDownToClose
                    snapPoints={['80%']}
                    onChange={handleSheetChanges}
                >
                    <BottomSheetView style={styles.contentContainer}>
                        <View style={styles.closeDiv}>
                            <TouchableOpacity onPress={handleCloseBottomSheet}>
                                <Image source={closeIcon} style={styles.close} />
                            </TouchableOpacity>
                        </View>
                        {/* 5. Hiển thị thông tin chi tiết trong bottom sheet */}
                        <Text style={styles.ProTit}>Product Information</Text>
                        <Text style={styles.intro}>{productData.name}</Text>

                        {/* 2. Container cho bảng thông số kỹ thuật */}
                        <View style={styles.specsContainer}>
                            {specifications.map((spec, index) => {
                                // Nếu là mục rating, render component sao
                                if (spec.type === 'rating') {
                                    return (
                                        <View key={index}>
                                            <View style={styles.specRow}>
                                                <Text style={styles.specLabel}>{spec.label}</Text>
                                                <View style={styles.ratingValueContainer}>
                                                    <StarRating rating={spec.value} />
                                                    <Text style={styles.reviewCountText}>({spec.reviews || 0})</Text>
                                                </View>
                                            </View>
                                            {index < specifications.length - 1 && <View style={styles.divider} />}
                                        </View>
                                    );
                                }

                                return (
                                    <View key={index}>
                                        <View style={styles.specRow}>
                                            <Text style={styles.specLabel}>{spec.label}</Text>
                                            <Text style={styles.specValue}>{spec.value}</Text>
                                        </View>
                                        {index < specifications.length - 1 && <View style={styles.divider} />}
                                    </View>
                                );
                            })}
                        </View>
                    </BottomSheetView>
                </BottomSheet>
            )}
        </View>
    );
};

// Stylesheet có thể giữ nguyên phần lớn, chỉ cần đảm bảo nó phù hợp
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    head: {
        zIndex: 1,
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'absolute',
        top: 50, // Điều chỉnh cho phù hợp với thiết bị
    },
    headImg: {
        width: 36,
        height: 36,
    },
    imageContainer: {
        width: '100%',
        height: 450, // Giữ nguyên chiều cao của vùng chứa ảnh
        backgroundColor: '#fff', // Nền trắng cho vùng chứa ảnh
        // Thêm padding để ảnh co lại
        // padding: 40, // Ví dụ: co lại một khoảng cố định
        // Hoặc dùng paddingVertical/paddingHorizontal để co lại theo tỉ lệ
        paddingVertical: '10%', // Co lại 10% ở trên và dưới
        paddingHorizontal: '10%', // Co lại 10% ở trái và phải
    },

    // 3. Style của ảnh bây giờ rất đơn giản
    productImage: {
        width: '100%', // Chiếm 100% không gian còn lại bên trong imageContainer
        height: '100%', // Chiếm 100% không gian còn lại bên trong imageContainer
        resizeMode: 'contain', // Quan trọng: đảm bảo ảnh vừa vặn và không bị méo
    },
    content: {
        padding: 16,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        marginTop: -20, // Kéo content lên để che phần ảnh
    },
    price: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#212121',
        fontFamily: 'notoserif',
    },
    description: {
        fontSize: 18,
        color: '#666',
        fontFamily: 'notoserif',
        marginVertical: 12,
    },
    button: {
        backgroundColor: '#FF8C00',
        padding: 16,
        borderRadius: 8,
        width: '100%',
        marginTop: 16,
    },
    buttonText: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    info: {
        width: '100%',
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 8,
        marginTop: 8,
    },
    infoDiv: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        alignItems: 'center',
    },
    infoTxt: {
        fontSize: 16,
        color: '#212121',
        fontFamily: 'notoserif',
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
    space: {
        height: 100
    },
    // Bottom Sheet Styles
    contentContainer: {
        flex: 1,
        paddingHorizontal: 24, // Tăng padding để rộng rãi hơn
        paddingTop: 12,
    },
    closeDiv: {
        alignSelf: 'flex-start',
        width: '100%',
        marginBottom: 16,
    },
    close: {
        width: 24,
        height: 24,
    },
    ProTit: {
        color: '#FF8C00',
        fontFamily: 'notoserif',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center', // Căn giữa tiêu đề chính
        width: '100%',
    },
    intro: { // Style cho tên sản phẩm bên trong bottom sheet
        color: '#212121',
        fontFamily: 'notoserif',
        fontSize: 20,
        fontWeight: '600',
        textAlign: 'center',
        marginVertical: 16,
    },
    specsContainer: {
        width: '100%',
        marginTop: 16,
        backgroundColor: '#F5F5F5', // Nền nhẹ để phân biệt
        borderRadius: 12,
        padding: 16,
    },
    specRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 14,
    },
    specLabel: {
        fontSize: 16,
        color: '#666', // Màu xám cho nhãn
        fontFamily: 'notoserif',
    },
    specValue: {
        fontSize: 16,
        color: '#212121', // Màu đen cho giá trị
        fontWeight: 'bold', // In đậm giá trị
        fontFamily: 'notoserif',
        flex: 1, // Cho phép text xuống dòng nếu quá dài
        textAlign: 'right',
        marginLeft: 10,
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: '#E0E0E0', // Màu đường kẻ nhạt
    },
    starContainer: {
        flexDirection: 'row',
        gap: 3, // Khoảng cách giữa các ngôi sao
    },
    ratingValueContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    reviewCountText: {
        marginLeft: 8,
        fontSize: 14,
        color: '#9E9E9E',
        fontFamily: 'notoserif',
    },
});

export default ProductScreen;