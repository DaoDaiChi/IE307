import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Avatar = ({ avatar, username }: { avatar: string, username: string }) => {
  return (
    <View style={styles.userInfo}>
      <Image source={{ uri: avatar }} style={styles.avatar} />
      <Text style={styles.username}>{username}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    fontWeight: 'bold',
  },
});

export default Avatar;
