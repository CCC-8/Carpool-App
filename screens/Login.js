import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";

const LoginScreen = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image
            resizeMode="auto"
            source={{
              uri:
                "https://cdn.builder.io/api/v1/image/assets/TEMP/ef11e0d736e5ca4e4802a370dbf053a91a3773a841e5a79668f0520223de6989?apiKey=cac3d0e9b9774c4497fcb9abd75240cc&",
            }}
            style={styles.logo}
          />
          <Text style={styles.heading}>Sign In</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subtitle}>Hello there, sign in to continue!</Text>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          name="email"
          required={false}
          accessibilityLabel="Email Input"
        />
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder=""
          name="password"
          required={false}
          accessibilityLabel="Password Input"
        />
        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.link} onPress={() => navigation.navigate('Verification')}>Forgot your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#00BFA6",
    display: "flex",
    paddingTop: 34,
    paddingBottom: 20,
  },
  logoContainer: {
    display: "flex",
    marginLeft: 20,
    padding: 10,
  },
  logo: {
    width: 35,
    aspectRatio: 1,
    marginBottom: 10,
  },
  heading: {
    fontFamily: "montserrat-bold",
    fontWeight: "500",
    fontSize: 30,
    color: "#EFEFF0",
    marginVertical: 20,
  },
  container: {
    backgroundColor: "#EFEFF0",
    marginTop: 20,
    marginHorizontal: 10,
    padding: 20,
  },
  title: {
    color: "#515155",
    fontSize: 30,
    fontFamily: "montserrat-bold",
    marginTop: 17,
  },
  subtitle: {
    fontFamily: "montserrat-regular",
    fontWeight: "600",
    marginVertical: 20,
  },
  label: {
    fontFamily: "montserrat-bold",
    color: "#515155",
    marginTop: 20,
  },
  input: {
    fontFamily: "montserrat-regular",
    marginTop: 10,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "rgba(33, 33, 36, 0.004)",
    height: 45,
    backgroundColor: "rgba(0, 191, 166, 0.12)",
    padding: 10,
    paddingHorizontal: 15,
  },
  forgotPassword: {
    color: "#00BFA6",
    marginTop: 20,
  },
  link: {
    fontFamily: "montserrat-bold",
    color: "#00BFA6",
  },
  signInButton: {
    marginTop: 40,
    borderRadius: 3,
    backgroundColor: "#00BFA6",
    justifyContent: "center",
    alignItems: "center",
    color: "#EFEFF0",
    padding: 15,
  },
  buttonText: {
    fontFamily: "montserrat-bold",
    color: "#EFEFF0",
    textAlign: "center",
  },
});

export default LoginScreen;