import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Pressable,
  Button,
} from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/093693dfc0f50b84b94058556d6355340ec0f58388ccb92e660714c85ca960ed?",
        }}
        style={styles.image1}
      />
      {/* <Image
        resizeMode="contain"
        source={{
          uri: "https://cdn.builder.io/api/v1/image/assets/TEMP/3ef46da7ed01ff5722b19da5ec5dc0a4c1fdd3a272e4ec1f36168202ef6dc3be?",
        }}
        style={styles.image2}
      /> */}
      <View>
        <Text style={styles.h1}>Welcome</Text>
      </View>
      <View>
        <Text style={styles.h2}>
          Manage your carpool ride{" "}
          <Text style={{ fontWeight: "600" }}>seamlessly & intuitively</Text>
        </Text>
      </View>
      <Pressable style={styles.signInButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signInButtonTxt}>Sign in with ID</Text>
      </Pressable>
      <Pressable style={styles.createAccButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.createAccButtonTxt}>Create an account</Text>
      </Pressable>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00BFA6",
    display: "flex",
    maxWidth: 480,
    width: "100%",
    flexDirection: "column",
    alignItems: "stretch",
    fontSize: 16,
    color: "#EFEFF0",
    fontWeight: "700",
    margin: "0 auto",
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 150,
  },
  image1: { position: "relative", marginTop: 18, aspectRatio: 1 },
  // image2: {
  //   alignSelf: "center",
  //   position: "relative",
  //   marginTop: 29,
  //   width: 64,
  //   aspectRatio: 7.14,
  // },
  h1: {
    marginTop: 76,
    fontSize: 30,
    fontWeight: "700",
    fontFamily: "Montserrat, sans-serif",
    color: "#EFEFF0",
  },
  h2: {
    fontFamily: "Montserrat, sans-serif",
    fontWeight: "500",
    marginTop: 24,
    color: "#EFEFF0",
  },
  signInButton: {
    fontFamily: "Montserrat, sans-serif",
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: "#EFEFF0",
    backgroundColor: "#EFEFF0",
    marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
    color: "#00BFA6",
    textAlign: "center",
    paddingVertical: 15,
    paddingHorizontal: 60,
  },
  createAccButton: {
    fontFamily: "Montserrat, sans-serif",
    borderRadius: 3,
    borderWidth: 1.5,
    borderColor: "#EFEFF0",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingVertical: 17,
    paddingHorizontal: 60,
  },
  signInButtonTxt: {
    color: "#00BFA6",
  },
  createAccButtonTxt: {
    color: "#EFEFF0",
  }
});

export default WelcomeScreen;