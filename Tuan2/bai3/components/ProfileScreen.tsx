import React from 'react';
import { View, Button, Text } from 'react-native';
import { useAuth } from './AuthContext';

const ProfileScreen: React.FC = () => {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Profile Screen</Text>
      <Button title="Log Out" onPress={logout} />
    </View>
  );
};

export default ProfileScreen;