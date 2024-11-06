import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from './Avatar';
import PostTextContent from './PostTextContent';
import PostImage from './PostImage';
import PostInteractions from './PostInteractions';
import { PostType } from '../assets/types';

const Post = ({ post }: { post: PostType }) => {
  return (
    <View style={styles.postContainer}>
      <Avatar avatar={post.avatar} username={post.username} />
      <PostTextContent content={post.content} />
      <PostImage image={post.image} />
      <PostInteractions likes={post.likes} comments={post.comments} shares={post.shares} />
    </View>
  );
};

const styles = StyleSheet.create({
  postContainer: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default Post;
