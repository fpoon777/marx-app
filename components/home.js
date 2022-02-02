//Home page is a place holder where other features can be added in the future
//Currently it directs to the insulin calculator stack.

import React, { Component } from 'react';
import { Button, Dimensions } from 'react-native';
import { StyleSheet, View, Text, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes} from '../styles/index';
import LargeButton from '../gadgets/large_button';
import * as Strings from '../gadgets/strings';
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
          <Text>This is the landing page to Insulin Calculator</Text>

          <View style = {styles.buttonContainer}>
              <LargeButton 
                onPress={() => this.props.navigation.navigate('InsulinPage0')}
                title={"Next"} />
          </View>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonContainer:{
    ...Buttons.buttonContainer
  },
});

export default Home;