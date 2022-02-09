//Home page is a place holder where other features can be added in the future
//Currently it directs to the insulin calculator stack.

import React, { Component } from 'react';
import { Button, Dimensions } from 'react-native';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import { Buttons, InputBoxes} from '../styles/index';
import LargeButton from '../gadgets/large_button';
import * as Strings from '../gadgets/strings';
import FunctionCard from '../gadgets/function_card';
// import { AppLoading } from "expo-app-loading";
// import {
//   useFonts,
//   Inter_700Bold,
//   Inter_500Medium,
//   Inter_300Light
// } from '@expo-google-fonts/inter';

// let [fontLoaded] = useFonts({
//   Inter_700Bold,
//   Inter_500Medium,
//   Inter_300Light
// })



class Home extends Component {

  render() {
      return (
        <View style={styles.container}>
          {/* <View style={styles.cardContainer}>
            <FunctionCard colors = {['#2ade88', '#1fcc79', '#2ade88']} />
          </View> */}
          <TouchableOpacity onPress={() => this.props.navigation.navigate('InsulinPage0')}>
            <FunctionCard 
              colors = {['#2ade88', '#1fcc79', '#2ade88']} 
              cardText={"Insulin Calculator"}
              />     
          </TouchableOpacity>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop:10
  },
  buttonContainer:{
    ...Buttons.buttonContainer
  },
  cardContainer:{
    marginVertical: 15,
    width: 100,
    height: 100,
    
  }
});

export default Home;