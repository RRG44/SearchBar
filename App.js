import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import { SearchBar } from './components/Searchbar.js';
import { ProductList } from './components/ProductList.js';
import { products } from './data.js';


export default function App() {

  const [search, setSearch] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (text) => {
    
    const filtered = products.filter( (product) => {
      return product.name.toLowerCase().includes(text.toLowerCase());
    });

    setFilteredProducts(filtered);
    setSearch(text);
  };

  return (
    <SafeAreaView style = {styles.mainContainer}>
      {/* <StatusBar
          animated={true}
          backgroundColor="#FCDC2A"
          hidden={false}
        /> */}
      <View style={styles.container}>
        <Text style = {styles.title}>Recipes</Text>
        <SearchBar value = {search} onChangeText = {handleSearch} />
        <ProductList products = {filteredProducts} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer:
  {
    flex: 1,
    backgroundColor: '#FCDC2A', 
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 10,
    color: '#114232'
  },
});
