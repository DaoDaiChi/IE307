import React, { useState } from 'react';
import { View, TextInput, Button, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from './AuthContext';
import { NavigationProp } from '@react-navigation/native';

interface Props {
  navigation: NavigationProp<any>;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleLogin = () => {
    login(email, password);
  };

  return (
    <View style={styles.container}>
      {/* Logo Image */}
      <Image 
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} 
        style={styles.logo} 
      />
      
      {/* Welcome Text */}
      <Text style={styles.welcomeText}>Welcome</Text>
      
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
      
      {/* Login Button */}
      <Button title="Log In" onPress={handleLogin} />
      
      {/* Or login with */}
      <Text style={styles.orLoginWith}>Or login with</Text>
      
      {/* Social Login Icons */}
      <View style={styles.socialContainer}>
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' }} 
            style={styles.socialLogo} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Image 
            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Google_2015_logo.svg' }} 
            style={styles.socialLogo} 
          />
        </TouchableOpacity>
      </View>

      {/* Navigate to SignUp */}
      <Text style={styles.signUpText} onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up Here!
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
  logo: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  welcomeText: {
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
  orLoginWith: {
    marginTop: 20,
    fontSize: 16,
    color: 'black',
  },
  socialContainer: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
    width: '40%',  // Adjust this width as needed
  },
  socialLogo: {
    width: 40,   // Size for Facebook/Google logos
    height: 40,  // Adjust as needed
  },
  signUpText: {
    marginTop: 20,
    color: 'blue',
  },
});

export default LoginScreen;