import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const PostInteractions = ({ likes, comments, shares }: { likes: number, comments: number, shares: number }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [commentCount, setCommentCount] = useState(comments);
  const [shareCount, setShareCount] = useState(shares);
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    setLikeCount(likeCount + (liked ? -1 : 1));
    setLiked(!liked);
  };

  const handleCommentPress = () => {
    setCommentCount(commentCount + 1);
  };

  const handleSharePress = () => {
    setShareCount(shareCount + 1);
  };

  return (
    <View style={styles.buttonsContainer}>
      <TouchableOpacity onPress={handleLikePress}>
        <Text style={[styles.button, liked ? styles.liked : null]}>{likeCount} Likes</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCommentPress}>
        <Text style={styles.button}>{commentCount} Comments</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleSharePress}>
        <Text style={styles.button}>{shareCount} Shares</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    color: '#007BFF',
    fontWeight: 'bold',
  },
  liked: {
    color: '#FF4500',
  },
});

export default PostInteractions;
