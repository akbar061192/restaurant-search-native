import { StyleSheet, FlatList } from 'react-native';
import React from 'react';
import CategoryItem from './CategoryItem';

const Categories = props => {
  const { term, setTerm } = props;
  const items = [
    { name: 'Burger', imageUrl: require('../assets/images/burger.png') },
    { name: 'Pasta', imageUrl: require('../assets/images/pasta.png') },
    { name: 'Desserts', imageUrl: require('../assets/images/cake.png') },
    { name: 'Steak', imageUrl: require('../assets/images/steak.png') },
    { name: 'Drinks', imageUrl: require('../assets/images/smoothies.png') },
    { name: 'Pizza', imageUrl: require('../assets/images/pizza.png') },
  ];

  const handleItemChange = item => {
    setTerm(item);
  };

  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => {
        return (
          <CategoryItem
            name={item.name}
            image={item.imageUrl}
            index={index}
            active={term.toLowerCase() === item.name.toLowerCase()}
            handleItemChange={() => handleItemChange(item.name)}
          />
        );
      }}
      keyExtractor={item => item.name}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Categories;

const styles = StyleSheet.create({});
