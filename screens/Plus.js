import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Plus = () => {
  return (
    <View style={styles.container}>
      <Text>Plus Screen</Text>
      <Button title="Click Here" onPress={() => alert("Button Clicked!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
});

export default Plus;
