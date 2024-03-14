import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

const Homepage = ({ navigation }) => {
  const handleLogout = () => {
    // Clear any user data or authentication tokens here
    navigation.replace('Landing'); // Replace the current screen with the landingpage screen
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo_transparent.png')} style={styles.logo} />
      </View>
      <Text style={styles.header}>Let's Start</Text>
      <TouchableOpacity style={styles.button} onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 40,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#335A02',
  },
  button: {
    backgroundColor: '#335A02',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Homepage;
