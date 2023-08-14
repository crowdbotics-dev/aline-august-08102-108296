import React from "react";
import { StyleSheet, ScrollView, SafeAreaView, Image, Text, View } from "react-native";

const Untitled4 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.profileContainer}>
          <Image source={{
          uri: "https://tinyurl.com/42evm3m3"
        }} style={styles.profileImage} />
          <View style={styles.profileTextContainer}>
            <Text style={styles.profileName}>John Doe</Text>
            <Text style={styles.profileDescription}>
              Welcome to my profile! I'm a software engineer and I love coding.
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  profileTextContainer: {
    flex: 1
  },
  profileName: {
    fontWeight: "bold",
    fontSize: 16
  },
  profileDescription: {
    fontSize: 14,
    color: "#666"
  }
});
export default Untitled4;