import { View, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from './src/components/Header';
import Search from './src/components/Search,';
import CategoryItem from './src/components/CategoryItem';
import { useState } from 'react';
import Categories from './src/components/Categories';
import Restaurants from './src/components/Restaurants';

const App = () => {
  const [term, setTerm] = useState('Burger');

  return (
    <View>
      <Header />
      <Search setTerm={setTerm} />
      <Categories term={term} setTerm={setTerm} />
      <Restaurants />
      <StatusBar />
    </View>
  );
};

export default App;
