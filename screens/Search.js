import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Search = () => {
  return (
    <View style={styles.container}>
      <Text>Search Screen</Text>
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

export default Search;
