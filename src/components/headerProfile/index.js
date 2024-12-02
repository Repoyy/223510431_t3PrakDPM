import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../../style/buttonStyles";

const ProfileHeader = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require("../../../assets/me.jpeg")} 
        style={styles.image} 
      />
      <Text style={styles.text}>Muhammad Revi Suyandi</Text>
      <View style={styles.counterContainer}>
        <View style={styles.itemContainer}>
          <Text style={styles.numberText}>123</Text>
          <Text style={styles.labelText}>Followers</Text>
        </View>
        <TouchableOpacity style={buttonStyles.grayOutlinedButton}>
          <Text style={buttonStyles.grayOutlinedButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "lightgray",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
  },
  counterContainer: {
    flexDirection: "row",
    padding: 6,
    alignItems: "center",
  },
  itemContainer: {
    alignItems: "center",
    margin: 10,
  },
  numberText: {
    fontWeight: "bold",
    fontSize: 16,
  },
  labelText: {
    color: "gray",
    fontSize: 11,
    fontWeight: "bold",
  },
});
