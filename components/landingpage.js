import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const LandingPage = ({ navigation }) => {
  const handleSignUp = () => {
    navigation.navigate('Registration'); // Navigate to Registration screen
  };

  const handleLogin = () => {
    navigation.navigate('loginpage'); // Navigate to Login screen
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
      <Text style={styles.header}>Welcome to Our Work</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignUp}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleLogin}>
        <Text style={[styles.buttonText, styles.loginButtonText]}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 200,
    marginBottom: 40,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#335A02', // Primary color from your palette
  },
  button: {
    backgroundColor: '#335A02',
    paddingVertical: 14,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 20,
    elevation: 3, // Add elevation for a subtle shadow effect
  },
  loginButton: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#335A02',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'uppercase', // Convert text to uppercase for a modern look
  },
  loginButtonText: {
    color: '#335A02',
    textTransform: 'uppercase',
  },
});

export default LandingPage;
