import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.boldHeader}>delicious meals!</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    marginLeft: 25,
  },
  lightHeader: {
    fontSize: 35,
  },
  boldHeader: {
    fontSize: 40,
    fontWeight: 'bold',
  },
});
