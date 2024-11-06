import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const SignUpScreen: React.FC<Props> = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // Handle sign-up logic here
  };

  return (
    <View style={styles.container}>
      {/* Google Logo */}
      <TouchableOpacity>
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg' }} 
          style={styles.socialLogo} 
        />
      </TouchableOpacity>

      {/* Create New Account Text */}
      <Text style={styles.title}>Create New Account</Text>

      {/* Username Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Username" 
        value={username} 
        onChangeText={setUsername} 
      />

      {/* Email Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
      />

      {/* Password Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
      />

      {/* Confirm Password Input */}
      <TextInput 
        style={styles.input} 
        placeholder="Confirm Password" 
        secureTextEntry 
        value={confirmPassword} 
        onChangeText={setConfirmPassword} 
      />

      {/* Create Account Button */}
      <Button title="Create Account" onPress={handleSignUp} />

      {/* Navigate to Login */}
      <Text style={styles.loginText} onPress={() => navigation.navigate('Login')}>
        Already have an account? Log in now!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  socialLogo: {
    width: 100, // Adjust the size according to your design
    height: 40, 
    marginBottom: 20, // Space between the logo and the "Create New Account" text
  },
  title: {
    fontSize: 24,
    color: 'black',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  loginText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default SignUpScreen;