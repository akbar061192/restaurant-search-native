import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Restaurants = () => {
  return (
    <View style={styles.restaurantContainer}>
      <Text style={styles.text}>Top Restaurants</Text>
      <Text style={styles.text}>Top Restaurants</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  restaurantContainer: {
    marginHorizontal: 25,
  },
  text: {
    fontWeight: 'bold',
    marginBottom: 15,
  },
});

export default Restaurants;
