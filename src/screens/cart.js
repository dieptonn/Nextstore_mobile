/**
 * Màn hình Giỏ hàng (Cart)
 * - Tự động tải lại dữ liệu mỗi khi người dùng truy cập tab này.
 * - Hiển thị 3 trạng thái: Đang tải, Giỏ hàng rỗng, và Giỏ hàng có sản phẩm.
 * - Hiển thị danh sách sản phẩm, tổng tiền và nút thanh toán.
 * - Khối thanh toán được đẩy lên trên thanh Footer.
 */
import React, { useState, useCallback } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

// Import các hình ảnh cần thiết từ assets
import bagEmpty from '../assets/images/emptybag.png';
import trashIcon from '../assets/images/trash.png'; // Đảm bảo bạn có file ảnh này
import loadingImage from '../assets/images/loading.png'; // Ảnh placeholder khi ảnh thật đang tải

// --- Hằng số ---
const API_URL = 'https://nextstore-be.onrender.com/api/v1/cartPayment/getCart';
const FOOTER_HEIGHT = 84; // Chiều cao của thanh Footer để đẩy khối checkout lên

// --- Hàm tiện ích ---
/**
 * Định dạng chuỗi số thành tiền tệ Việt Nam.
 * @param {string | number} price - Giá sản phẩm.
 * @returns {string} - Chuỗi giá đã được định dạng (ví dụ: "599.000 ₫").
 */
const formatPrice = (price) => {
    const numericPrice = Number(price);
    if (isNaN(numericPrice)) return 'N/A';
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericPrice);
};

// --- Component con: Hiển thị một sản phẩm trong giỏ hàng ---
const CartItem = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <Image
                source={{ uri: item.product_img }}
                style={styles.itemImage}
                defaultSource={loadingImage}
            />
            <View style={styles.itemDetails}>
                <Text style={styles.itemName} numberOfLines={2}>{item.name}</Text>
                <Text style={styles.itemPrice}>{formatPrice(item.price)}</Text>
            </View>
            <View style={styles.itemActions}>
                <Text style={styles.itemQuantity}>SL: {item.quantity}</Text>
                <TouchableOpacity>
                    <Image source={trashIcon} style={styles.trashIcon} />
                </TouchableOpacity>
            </View>
        </View>
    );
};

// --- Component chính: Màn hình Giỏ hàng ---
const CartScreen = () => {
    const [cartData, setCartData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    // Sử dụng useFocusEffect để gọi lại API mỗi khi màn hình được người dùng truy cập
    useFocusEffect(
        useCallback(() => {
            const fetchCart = async () => {
                setIsLoading(true);
                setError(null);
                try {
                    // LƯU Ý: userId: 2 đang được hard-code.
                    // Cần thay thế bằng ID người dùng thật sau khi có hệ thống đăng nhập.
                    const response = await fetch(API_URL, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ userId: 2 }),
                    });

                    if (!response.ok) {
                        throw new Error(`Lỗi mạng: ${response.status}`);
                    }

                    const json = await response.json();

                    if (json.status === 'success') {
                        setCartData(json.data);
                    } else {
                        throw new Error(json.message || 'Lấy dữ liệu giỏ hàng thất bại');
                    }
                } catch (err) {
                    setError(err.message);
                    console.error("Lỗi khi tải giỏ hàng:", err);
                } finally {
                    setIsLoading(false);
                }
            };

            fetchCart();

            // Trả về một hàm cleanup (không bắt buộc trong trường hợp này)
            return () => { };
        }, [])
    );

    // --- Các kịch bản hiển thị ---

    // 1. Trạng thái đang tải
    if (isLoading) {
        return (
            <View style={styles.centered}>
                <ActivityIndicator size="large" color="#FF8C00" />
            </View>
        );
    }

    // 2. Trạng thái có lỗi
    if (error) {
        return (
            <View style={styles.centered}>
                <Text style={styles.errorText}>Đã xảy ra lỗi: {error}</Text>
            </View>
        );
    }

    // 3. Trạng thái giỏ hàng rỗng
    if (!cartData || !cartData.items || cartData.items.length === 0) {
        return (
            <View style={styles.containerEmpty}>
                <Text style={styles.TabName}>My Cart</Text>
                <View style={styles.contentEmpty}>
                    <Image source={bagEmpty} style={styles.imgEmpty} />
                    <Text style={styles.titleEmpty}>Your cart is empty</Text>
                    <Text style={styles.descriptionEmpty}>
                        Looks like you haven't added anything to your cart yet.
                    </Text>
                </View>
            </View>
        );
    }

    // 4. Trạng thái giỏ hàng có sản phẩm
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.TabName}>My Cart</Text>
            <FlatList
                data={cartData.items}
                renderItem={({ item }) => <CartItem item={item} />}
                keyExtractor={item => item._id}
                style={styles.list}
                contentContainerStyle={{ paddingBottom: 200 }} // Padding để item cuối không bị che
                showsVerticalScrollIndicator={false}
            />
            {/* Khối tổng tiền và checkout, được đẩy lên trên Footer */}
            <View style={[styles.summaryContainer, { bottom: FOOTER_HEIGHT }]}>
                <View style={styles.totalRow}>
                    <Text style={styles.totalLabel}>Total</Text>
                    <Text style={styles.totalPrice}>{formatPrice(cartData.total_price)}</Text>
                </View>
                <TouchableOpacity style={styles.checkoutButton}>
                    <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    TabName: { fontSize: 32, fontWeight: 'bold', fontFamily: 'notoserif', color: '#FF8C00', paddingHorizontal: 20, paddingTop: 50, paddingBottom: 10 },
    list: { paddingHorizontal: 16 },
    itemContainer: { flexDirection: 'row', backgroundColor: '#F5F5F5', borderRadius: 12, padding: 12, marginBottom: 12, alignItems: 'center' },
    itemImage: { width: 80, height: 80, borderRadius: 8, marginRight: 12, backgroundColor: '#fff' },
    itemDetails: { flex: 1 },
    itemName: { fontSize: 16, fontWeight: '600', color: '#212121' },
    itemPrice: { fontSize: 16, color: '#FF8C00', fontWeight: 'bold', marginTop: 8 },
    itemActions: { alignItems: 'flex-end', justifyContent: 'space-between', height: '100%' },
    itemQuantity: { fontSize: 16, fontWeight: 'bold' },
    trashIcon: { width: 24, height: 24 },
    summaryContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 30, // Padding cho vùng an toàn của điện thoại (ví dụ: iPhone có thanh home)
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 4.65,
        elevation: 6,
    },
    totalRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 },
    totalLabel: { fontSize: 18, color: '#666' },
    totalPrice: { fontSize: 22, fontWeight: 'bold', color: '#212121' },
    checkoutButton: { backgroundColor: '#FF8C00', padding: 16, borderRadius: 8, alignItems: 'center' },
    checkoutButtonText: { fontSize: 18, color: '#fff', fontWeight: 'bold' },
    centered: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
    errorText: { color: 'red', fontSize: 16 },
    containerEmpty: { flex: 1, backgroundColor: '#fff' },
    contentEmpty: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
    imgEmpty: { width: 120, height: 120, marginBottom: 18 },
    titleEmpty: { fontSize: 24, fontWeight: 'bold', fontFamily: 'notoserif', color: '#212121' },
    descriptionEmpty: { fontSize: 16, textAlign: 'center', color: '#9E9E9E', marginTop: 10 },
});

export default CartScreen;