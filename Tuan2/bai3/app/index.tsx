import React from 'react';
import { AuthProvider, useAuth } from '../components/AuthContext';
import AppNavigator from '../components/AppNavigator'; // Đảm bảo rằng bạn đã tạo file này

export default function App() {
  return (
    <AuthProvider>
      <AppNavigator />
    </AuthProvider>
    //hello
  );
}
