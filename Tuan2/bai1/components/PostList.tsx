import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Post from './Post';
import { postsData } from '../assets/data'; // Dữ liệu bài viết nằm trong file riêng

const PostList = () => {
  return (
    <FlatList
      data={postsData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Post post={item} />}
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
});

export default PostList;
