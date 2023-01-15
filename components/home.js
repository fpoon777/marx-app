//Home page is a place holder where other features can be added in the future
//Currently it directs to the insulin calculator stack.

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Buttons } from '../styles/index';
import LargeButton from '../gadgets/large_button';
import FunctionCard from '../gadgets/function_card';
import AsyncStorage from '@react-native-async-storage/async-storage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.clearData = this.clearData.bind(this);
  }

  clearData = async () => {
    try {
      await AsyncStorage.removeItem('@firstTime_key');
    } catch (e) {
      console.log("err: ", e);
    }
  }

  

  render() {
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('InsulinPage0')}>
            <FunctionCard 
              colors = {['#2ade88', '#1fcc79', '#2ade88']} 
              cardText={"Insulin Calculator"}
              />     
          </TouchableOpacity>

          {/* Code below can be used for testing the onboarding pages by going back. */}
          <LargeButton 
            title="Back"
            onPress={this.clearData}
          />
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