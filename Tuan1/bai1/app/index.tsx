import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import PostList from '../components/PostList';  // Import PostList từ file PostList.js

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header với phông xanh và chữ "Social Media Feed" */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Social Media Feed</Text>
      </View>

      {/* Danh sách các bài đăng */}
      <PostList />
    </SafeAreaView>
  );
}

// Styles cho màn hình chính và header
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#007BFF',  // Màu nền xanh
    padding: 20,
    alignItems: 'center',        // Căn giữa chữ
  },
  headerText: {
    color: '#fff',               // Màu chữ trắng
    fontSize: 20,                // Kích thước chữ
    fontWeight: 'bold',
  },
});