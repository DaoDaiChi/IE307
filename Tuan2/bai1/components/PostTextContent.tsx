import React from 'react';
import { Text, StyleSheet } from 'react-native';

const PostTextContent = ({ content }: { content: string }) => {
  return <Text style={styles.content}>{content}</Text>;
};

const styles = StyleSheet.create({
  content: {
    marginBottom: 10,
  },
});

export default PostTextContent;
