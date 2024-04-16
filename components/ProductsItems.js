import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export const ProductsItems = props => {
  return(
    <View style = {styles.container}>
      <Text style = {styles.title}>{props.name}...${props.price}</Text>
      <Image style = {styles.image}
        source={{uri: props.image}}/>
      <Text style = {styles.text}>{props.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F7F6BB',
    borderRadius: 10,
    width: 'auto',
    height: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 20,
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#114232',
  }, 
  text: {
    fontSize: 12,
  },
  image: {
    width: 210,
    height: 160,
    margin: 20,
    borderRadius: 10,
  },
});