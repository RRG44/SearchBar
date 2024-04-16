import React, {useState} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { ProductsItems } from './ProductsItems.js'

export const ProductList = props => {
  return(
    <FlatList 
      style = {styles.list}
      data = {props.products}
      renderItem={({ item }) => (
        <ProductsItems 
          name={item.name} 
          description={item.description}
          image = {item.image}
          price = {item.price}
        />
      )}
      keyExtractor={item => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    width: 350,
  },
});