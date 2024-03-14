import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

// Import your logo image
import LogoImage from '../assets/logo_transparent.png';

const AccountRecovery = ({ navigation }) => {
  const [email, setEmail] = useState('');

  const handleRecover = () => {
    // Here you can implement your account recovery logic, such as sending a password reset email
    console.log('Email:', email);

    // For demonstration purposes, show an alert to inform the user that a password reset email has been sent
    Alert.alert(
      'Password Recovery',
      'A password reset email has been sent to your email address.',
      [
        { text: 'OK', onPress: () => navigation.goBack() } // Navigate back to the previous screen
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Image source={LogoImage} style={styles.logo} />

      {/* Heading */}
      <Text style={styles.heading}>Account Recovery</Text>

      {/* Description */}
      <Text style={styles.description}>Enter your email address to recover your account:</Text>

      {/* Email Input */}
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      {/* Recover Account Button */}
      <TouchableOpacity onPress={handleRecover}>
        <Text style={styles.button}>Recover Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', // Same as LoginPage
    paddingHorizontal: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#335A02', // Primary color from your palette
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
    color: '#335A02', // Primary color from your palette
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: '#335A02',
    color: 'white',
    padding: 12,
    borderRadius: 5,
    textAlign: 'center',
    width: '100%',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AccountRecovery;
