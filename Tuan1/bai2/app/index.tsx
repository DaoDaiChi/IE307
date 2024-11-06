import React from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import Apps from '../components/App';  // Import App từ file App.tsx (đường dẫn này có thể thay đổi tùy vào cấu trúc thư mục của bạn)

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Apps />
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
