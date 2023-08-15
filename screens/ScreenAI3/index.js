import React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, SafeAreaView, Image } from "react-native";
export default function LoginScreen() {
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{
        uri: "https://tinyurl.com/42evm3m3"
      }} style={styles.logo} />
        <Text style={styles.logoText}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#fff" />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#fff" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
    alignItems: "center",
    justifyContent: "center"
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50
  },
  logoText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#333",
    borderRadius: 25,
    height: 50,
    paddingLeft: 20,
    marginBottom: 20,
    color: "#fff"
  },
  button: {
    backgroundColor: "#FFA500",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
});