// --- File: src/screens/home.js ---
import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Xóa import hình ảnh category vì không còn dùng
import searchIcon from '../assets/images/search.png';

const CATEGORY_API_URL = 'https://nextstore-be.onrender.com/api/v1/category/get-all';

// Component con đã được đơn giản hóa, không còn chứa Image
const CategoryItem = ({ item, onPress }) => (
    <TouchableOpacity style={styles.categories} onPress={() => onPress(item.name)}>
        <Text style={styles.categoryTxt}>{item.name.replace(/([A-Z])/g, ' $1').trim()}</Text>
    </TouchableOpacity>
);

const HomeScreen = () => {
    const navigation = useNavigation();

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(CATEGORY_API_URL);
                if (!response.ok) {
                    throw new Error(`Network response was not ok. Status: ${response.status}`);
                }
                const json = await response.json();

                if (json.status === 'success' && Array.isArray(json.data)) {
                    // Chuyển đổi dữ liệu, không cần thêm thuộc tính image
                    const formattedData = json.data.map((name, index) => ({
                        id: String(index),
                        name: name,
                    }));
                    setCategories(formattedData);
                } else {
                    throw new Error('Invalid data format from API');
                }
            } catch (err) {
                setError(err.message);
                console.error("Failed to fetch categories:", err);
            } finally {
                setIsLoading(false);
            }
        };

        fetchCategories();
    }, []);

    const navigateToProductList = (categoryName) => {
        navigation.navigate('ProductList', { categoryName: categoryName });
    };

    const renderContent = () => {
        if (isLoading) {
            return (
                <View style={styles.centered}>
                    <ActivityIndicator size="large" color="#FF8C00" />
                    <Text>Loading categories...</Text>
                </View>
            );
        }

        if (error) {
            return (
                <View style={styles.centered}>
                    <Text style={styles.errorText}>Error: {error}</Text>
                    <Text>Please check your server and network connection.</Text>
                </View>
            );
        }

        return (
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem item={item} onPress={navigateToProductList} />}
                keyExtractor={item => item.id}
                numColumns={2}
                style={styles.listContainer}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                ListFooterComponent={<View style={{ height: 100 }} />}
            />
        );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Nextstore</Text>
            <View style={styles.search}>
                <Image source={searchIcon} style={styles.searchLg}></Image>
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#A9A9A9"
                />
            </View>
            {renderContent()}
        </View>
    );
};

// Stylesheet đã được cập nhật
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#ffffff',
        paddingTop: 60,
    },
    centered: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        textAlign: 'center',
        paddingHorizontal: 20,
    },
    listContainer: {
        width: '90%',
        marginTop: 12,
    },
    row: {
        justifyContent: 'space-between',
        marginBottom: 12,
    },
    name: {
        marginTop: 40,
        textAlign: 'center',
        fontFamily: 'notoserif',
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 12,
        color: '#FF8C00'
    },
    search: {
        width: '90%',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        height: 64,
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
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
    // Style cho thẻ category đã được điều chỉnh
    categories: {
        width: '48%',
        backgroundColor: '#F5F5F5',
        borderRadius: 8,
        height: 100,
        // Canh giữa text trong thẻ
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10, // Thêm padding để text không bị sát viền
    },
    // Style cho text category
    categoryTxt: {
        fontFamily: 'notoserif',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333333',
        textAlign: 'center', // Đảm bảo text luôn ở giữa nếu có nhiều dòng
    }
    // Các style categoryImg và categoryName đã được xóa vì không cần thiết
});

export default HomeScreen;