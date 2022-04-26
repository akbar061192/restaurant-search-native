import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { elevation } from '../common/styles';

const CategoryItem = props => {
  const { name, image, index, active, handleItemChange } = props;

  return (
    <TouchableOpacity
      onPress={handleItemChange}
      style={[
        styles.categoryContainer,
        elevation,
        index === 0 ? { marginLeft: 25 } : { marginLeft: 20 },
        active ? { backgroundColor: 'gold' } : { backgroundColor: 'white' },
      ]}
    >
      <View style={{ backgroundColor: 'white', padding: 7, borderRadius: 20 }}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    width: 70,
    height: 90,
    marginVertical: 20,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
  },
  text: {
    fontWeight: 'bold',
    marginTop: 5,
  },
});

export default CategoryItem;
