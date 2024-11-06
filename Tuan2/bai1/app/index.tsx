import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';  // Import Header component
import PostList from '../components/PostList';  // Import PostList component

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header title="Social Media Feed" />

      {/* Danh sách các bài đăng */}
      <PostList />
    </SafeAreaView>
  );
}

// Styles cho màn hình chính
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
});
