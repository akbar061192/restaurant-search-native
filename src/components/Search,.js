import { StyleSheet, TextInput, View } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { elevation } from '../common/styles';
import { useState } from 'react';

const Search = props => {
  const [input, setInput] = useState('');
  const { setTerm } = props;

  const handleEdit = () => {
    if (input) {
      setTerm(input);
      setInput('');
    }
  };

  return (
    <View style={[styles.container, elevation]}>
      <FontAwesome name='search' size={24} color='black' />
      <TextInput
        style={styles.input}
        placeholder='Restaurants, food'
        value={input}
        onChangeText={text => setInput(text)}
        onEndEditing={handleEdit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 25,
    marginTop: 20,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  input: {
    marginLeft: 10,
    fontSize: 15,
    width: '100%',
  },
});

export default Search;
