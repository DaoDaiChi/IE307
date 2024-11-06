import React from 'react';
import { Image, StyleSheet } from 'react-native';

const PostImage = ({ image }: { image: string }) => {
  return <Image source={{ uri: image }} style={styles.postImage} />;
};

const styles = StyleSheet.create({
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default PostImage;
