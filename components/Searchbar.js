import { TextInput, StyleSheet } from "react-native";

export const SearchBar = props => {
  return (
    <TextInput 
      placeholder = "Search"
      multiline = {false}
      onChangeText = {props.onChangeText}
      value = {props.value}
      style = {styles.input}/>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor : '#FCDC2A',
    borderWidth: 2,
    borderColor: '#114232',
    height: 60,
    width: 350,
    borderRadius: 10,
    paddingHorizontal: 20,
    color: '#114232',
    fontSize: 16,
    margin: 20,
  },
});