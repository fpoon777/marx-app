import React from 'react';
import { Text, StyleSheet, Pressable, Dimensions } from 'react-native';
import { Buttons, Colors } from '../styles/index';
const { width, height } = Dimensions.get("screen");

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
  textGreen: {
    fontSize: width*0.04,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  textGrey:{
    fontSize: width*0.04,
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