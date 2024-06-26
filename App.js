import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoadingScreen from './src/screens/loading';
import HomeScreen from './src/screens/home';
import CartScreen from './src/screens/cart';
import SaveScreen from './src/screens/save';
import UserScreen from './src/screens/user';
import ProductScreen from './src/screens/product';
import ReviewScreen from './src/screens/reviews';
import NewReviewScreen from './src/screens/newReview';



import Footer from './src/components/footer';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Cập nhật trạng thái đã tải khi cần thiết
    setIsLoaded(true);
  }, []);

  const onNavigationStateChange = (currentState) => {
    // Nếu đang ở màn hình ProductScreen hoặc LoadingScreen, đặt isLoaded thành false
    const currentRoute = currentState.routes[currentState.index].name;
    if (currentRoute === 'Product') {
      setIsLoaded(false);
    } else if (currentRoute === 'Review' || currentRoute === 'NewReview') {
      setIsLoaded(false);
    } else if (currentRoute === 'Loading') {
      setIsLoaded(false);
    } else {
      setIsLoaded(true);
    }
  };

  return (
    <NavigationContainer onStateChange={onNavigationStateChange}>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Cart" component={CartScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Save" component={SaveScreen} options={{ headerShown: false }} />
        <Stack.Screen name="User" component={UserScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Product" component={ProductScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Review" component={ReviewScreen} options={{ headerShown: false }} />
        <Stack.Screen name="NewReview" component={NewReviewScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
      {isLoaded && <Footer />}
    </NavigationContainer>
  );
};

export default App;
