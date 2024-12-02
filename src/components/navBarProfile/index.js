import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Feather } from "@expo/vector-icons";

const ProfileNavBar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Feather name="search" size={20} />
      </TouchableOpacity>
      <Text style={styles.text}>My Profile</Text>
      <TouchableOpacity>
        <Feather name="menu" size={24} />
      </TouchableOpacity>
    </View>
  );
};

export default ProfileNavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 60,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
    fontWeight: "bold",
  },
});
