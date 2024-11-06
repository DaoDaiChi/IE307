import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import HomePageScreen from '../components/HomePageScreen';
import CategoriesScreen from '../components/CategoriesScreen';
import FavouritesScreen from '../components/FavouritesScreen';
import ProfileScreen from '../components/ProfileScreen';
import { useAuth } from '../components/AuthContext';

const AuthStack = createStackNavigator();
const MainBottom = createBottomTabNavigator();

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="SignUp" component={SignUpScreen} />
    </AuthStack.Navigator>
  );
}

function MainNavigator() {
  return (
    <MainBottom.Navigator>
      <MainBottom.Screen name="Home" component={HomePageScreen} />
      <MainBottom.Screen name="Categories" component={CategoriesScreen} />
      <MainBottom.Screen name="Favorites" component={FavouritesScreen} options={{ tabBarBadge: 3 }} />
      <MainBottom.Screen name="Profile" component={ProfileScreen} />
    </MainBottom.Navigator>
  );
}

function AppNavigator() {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <MainNavigator /> : <AuthNavigator />;
}

export default AppNavigator;
