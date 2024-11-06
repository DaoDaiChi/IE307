import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

type PostType = {
  id: string;
  username: string;
  avatar: string;
  content: string;
  image: string;
  likes: number;
  comments: number;
  shares: number;
};

// Dữ liệu mẫu của các bài đăng
const postsData = [
  {
    id: '1',
    username: 'Traveler',
    avatar: 'https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/422863420_1853948445008589_2774770990605586355_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHYTzz7eewBHaumAbjc1IwQdgvuF1WtDdR2C-4XVa0N1PqgNLll5KW8AeQRobbR-flBA-oNRDPLGQS5J0YLN3m3&_nc_ohc=h7BOTcz0fYoQ7kNvgHdjhMA&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=AerCZUbQ07NlejmTtZ9fOLu&oh=00_AYAlGt37rdR46TBsyzt_fNkzstulMW0dqTpfYgtd97yE9g&oe=67042983',
    content: 'Exploring ancient ruins in a distant land. 🌍✈️',
    image: 'https://th.bing.com/th/id/R.58cc46069f9c1bfec000c83e79721d31?rik=V6%2bwTqIO36Y40g&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f05%2f24%2f374644-path-landscape-trees.jpg&ehk=4r8HqHCVUOTPA4f19szEL4vOhfNMFE4FPAQUSSsOg%2bA%3d&risl=&pid=ImgRaw&r=0',
    likes: 1033,
    comments: 79,
    shares: 15,
  },
  {
    id: '2',
    username: 'Thalassophile',
    avatar: 'https://instagram.fsgn13-1.fna.fbcdn.net/v/t51.2885-19/461240390_1238073144003045_4412761755617875665_n.jpg?_nc_ht=instagram.fsgn13-1.fna.fbcdn.net&_nc_cat=109&_nc_ohc=FY7zlcQ-mGcQ7kNvgHKQ2aZ&_nc_gid=39ee3c80f00a432e9a067bec1acb19ac&edm=AP4sbd4BAAAA&ccb=7-5&oh=00_AYDr1l27_DHWjOQPZQM_QqbUUmYw_rQldVg5r7D_gzqozw&oe=670E539D&_nc_sid=7a9f4b',
    content: 'Enjoying a beautiful day at the beach! 🏖️🌊',
    image: 'https://th.bing.com/th/id/R.f47cdc28c87b323248a05b312b883706?rik=nGTd5kd0MW7r7g&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2f8%2f8c%2fGrand_Anse_Beach_Grenada.jpg&ehk=qVlfjVkcVsPguHSmjFcznxJ%2f8OicF0JK6HBO4Pygeok%3d&risl=&pid=ImgRaw&r=0',
    likes: 211,
    comments: 18,
    shares: 10,
  },
  
  {
    id: '3',
    username: 'ArtEnthusiast',
    avatar: 'https://scontent.fsgn1-1.fna.fbcdn.net/v/t39.30808-6/461654957_122118517514496575_6166835767931764666_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFIwYW4R9czs4-na4DbYoRqhtczMatz3F6G1zMxq3PcXhDlUcJddvHyn5qjUqdakZNQBole0l74gKksC6e_Pevg&_nc_ohc=j4BVBSgFM_UQ7kNvgFV34Px&_nc_ht=scontent.fsgn1-1.fna&_nc_gid=AJt26lUmtI1THypN7g7bpxz&oh=00_AYCAp-y4NKXHtFG2o-5cQX_zWzKPRN_TQwLcSOVlAqUDSw&oe=67041347',
    content: 'Create a vibrant painting inspired by nature. 🎨🍃',
    image: 'https://th.bing.com/th/id/OIP.0AzqgNlFiU5802pHX_YBYAHaFj?rs=1&pid=ImgDetMain',
    likes: 4170,
    comments: 663,
    shares: 58,
  },
  {
    id: '4',
    username: 'NatureLover',
    avatar: 'https://scontent.fhan4-3.fna.fbcdn.net/v/t39.30808-6/323922694_1606777663093184_4803526683562545963_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFA1Q82q1ycnbUtqDxVQUbgHquHhAN3pDweq4eEA3ekPC39x1E3o32H-Q6uUac6GMYs73Da2Gqjcrx1ilb8V2-N&_nc_ohc=S4SXnA89ImEQ7kNvgHokJfS&_nc_ht=scontent.fhan4-3.fna&_nc_gid=AOzNe-tko0sPDJKLYjV1-TJ&oh=00_AYCPgBT1rRGWkc58Or7PxuQ_q2fwMdVNB5MNn8ofxR4UCA&oe=67042CDD',
    content: 'Admiring the beauty of nature. 🎨🍃',
    image: 'https://th.bing.com/th/id/OIP.1GiLFnSujkLzR6rlXXSIdgHaEK?rs=1&pid=ImgDetMain',
    likes: 602,
    comments: 104,
    shares: 58,
  },
];

// Component cho mỗi bài đăng
const Post = ({ post }: { post: PostType }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [shares, setShares] = useState(post.shares);
  const [liked, setLiked] = useState(false);

  const handleLikePress = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  const handleCommentPress = () => {
    setComments(comments + 1);
  };

  const handleSharePress = () => {
    setShares(shares + 1);
  };

  return (
    <View style={styles.postContainer}>
      <View style={styles.userInfo}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <Text style={styles.username}>{post.username}</Text>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      <Image source={{ uri: post.image }} style={styles.postImage} />
      <View style={styles.interactions}>
        <Text>{likes} Likes</Text>
        <Text>{comments} Comments</Text>
        <Text>{shares} Shares</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handleLikePress}>
          <Text style={[styles.button, liked ? styles.liked : null]}>Like</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleCommentPress}>
          <Text style={styles.button}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleSharePress}>
          <Text style={styles.button}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Component PostList chứa danh sách các bài đăng
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

// Styles cho các thành phần
const styles = StyleSheet.create({
  list: {
    padding: 10,
  },
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
  content: {
    marginBottom: 10,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  interactions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
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

export default PostList;