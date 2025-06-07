import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    SafeAreaView
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Import icon quay lại từ thư mục assets của bạn
import backIcon from '../assets/images/back2.png';

/**
 * Ánh xạ tên Category (PascalCase) từ API danh mục
 * sang đường dẫn (path) được sử dụng trong API sản phẩm (camelCase + 's').
 * Điều này giúp quản lý các endpoint một cách tập trung và dễ bảo trì.
 */
const categoryPathMap = {
    Air: 'airs',
    Cooker: 'cookers',
    Freezer: 'freezers',
    Fridge: 'fridges',
    Fryer: 'fryers',
    Robot: 'robots',
    Television: 'televisions',
    WashingMachine: 'washingMachines',
    WaterHeater: 'waterHeaters',
};

/**
 * Hàm tiện ích để định dạng chuỗi số thành tiền tệ Việt Nam.
 * Ví dụ: "8000000" -> "8.000.000 ₫"
 * @param {string | number} price - Giá sản phẩm.
 * @returns {string} - Chuỗi giá đã được định dạng.
 */
const formatPrice = (price) => {
    const numericPrice = Number(price);
    if (isNaN(numericPrice)) {
        return 'N/A';
    }
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(numericPrice);
};

/**
 * Component con, chịu trách nhiệm hiển thị một sản phẩm trong danh sách.
 * @param {{item: object, onPress: function}} props
 */
const ProductItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.productItemContainer} onPress={onPress}>
        <Image
            source={{ uri: item.product_img }}
            style={styles.productImage}
            resizeMode="contain"
        />
        <View style={styles.productInfo}>
            <Text style={styles.productName} numberOfLines={2}>{item.name}</Text>
            <Text style={styles.productPrice}>{formatPrice(item.price_sale)}</Text>
        </View>
    </TouchableOpacity>
);

/**
 * Màn hình chính, hiển thị danh sách sản phẩm theo một danh mục cụ thể.
 */
const ProductListScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { categoryName } = route.params;
    const insets = useSafeAreaInsets();

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const path = categoryPathMap[categoryName];
            if (!path) {
                setError(`Danh mục "${categoryName}" không được hỗ trợ.`);
                setIsLoading(false);
                return;
            }

            const API_URL = `https://nextstore-be.onrender.com/api/v1/${path}/showProduct`;

            try {
                const response = await fetch(API_URL);
                if (!response.ok) {
                    throw new Error(`Lỗi mạng: ${response.status}`);
                }
                const json = await response.json();

                if (json.status === 'success' && Array.isArray(json.data)) {
                    setProducts(json.data);
                } else {
                    throw new Error('Định dạng dữ liệu từ API không hợp lệ.');
                }
            } catch (err) {
                setError(err.message);
                console.error("Lỗi khi tải sản phẩm:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, [categoryName]); // useEffect sẽ chạy lại nếu categoryName thay đổi

    // Hàm render nội dung chính dựa trên các trạng thái
    const renderContent = () => {
        if (isLoading) {
            return (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color="#FF8C00" />
                    <Text style={styles.loadingText}>Đang tải sản phẩm...</Text>
                </View>
            );
        }

        if (error) {
            return (
                <View style={styles.centered}>
                    <Text style={styles.errorText}>Đã xảy ra lỗi: {error}</Text>
                </View>
            );
        }

        if (products.length === 0) {
            return (
                <View style={styles.centered}>
                    <Text>Không tìm thấy sản phẩm nào trong danh mục này.</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={products}
                renderItem={({ item }) => (
                    <ProductItem
                        item={item}
                        onPress={() => navigation.navigate('Product', { productData: item })}
                    />
                )}
                keyExtractor={item => item._id}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
                showsVerticalScrollIndicator={false}
            />
        );
    };

    return (
        <View style={[styles.container, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image source={backIcon} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle} numberOfLines={1}>
                    {categoryName.replace(/([A-Z])/g, ' $1').trim()}
                </Text>
                <View style={styles.headerSpacer} />
            </View>

            {renderContent()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        height: 56,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        paddingHorizontal: 16, // Thêm padding ngang cho header
    },
    backButton: {
        // padding không cần thiết nữa nếu header đã có
    },
    backIcon: {
        width: 24,
        height: 24,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#212121',
        flex: 1, // Để title chiếm không gian và căn giữa
        textAlign: 'center', // Căn giữa text
    },
    headerSpacer: {
        width: 24, // Giữ chỗ để title căn giữa đều
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    loadingText: {
        marginTop: 10,
        color: '#666',
    },
    errorText: {
        color: 'red',
        textAlign: 'center',
        fontSize: 16,
    },
    listContainer: {
        paddingHorizontal: 8,
        paddingVertical: 16,
    },
    productItemContainer: {
        flex: 1,
        margin: 8,
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#EEEEEE',
    },
    productImage: {
        width: '100%',
        height: 150,
        backgroundColor: '#fff', // Thêm nền trắng cho ảnh
    },
    productInfo: {
        padding: 12,
    },
    productName: {
        fontSize: 14,
        fontWeight: '600',
        color: '#333',
        minHeight: 40, // Đảm bảo chiều cao tối thiểu cho 2 dòng
    },
    productPrice: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FF8C00',
        marginTop: 8,
    },
});

export default ProductListScreen;