import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Buttons, Colors } from '../styles/index';

// A large bevel shaped button
// input: props, including onPress function and a title
// output: a green button with the text set to title. and onPress function set by onPress
export default function LargeButton(props) {
  const { onPress, title, buttonColor } = props;
  return (
    <Pressable style={
      buttonColor === 'g' ? styles.greenButton: styles.greyButton} onPress={onPress}>
      <Text style={
        buttonColor === 'g' ? styles.textGreen: styles.textGrey}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    
  },
  textGreen: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textGrey:{
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
  },
  greenButton:{
    ...Buttons.largeButton,
    backgroundColor: Colors.primaryGreen.color,
  },
  greyButton:{
    ...Buttons.largeButton,
    backgroundColor: "#dedfe0"
  }
});