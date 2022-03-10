import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors } from '../styles/index';
import { NavigationContainer } from '@react-navigation/native';
import MainTabBar from './main_tab_bar';
import OneTimeStack from './one_time_stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

//https://react-native-async-storage.github.io/async-storage/docs/install

const Stack = createStackNavigator();

class MainApp extends Component {
  constructor(props) {
    super(props);
    this.state={
        isFirstTime:false
    }
    this.getOnetimeData = this.getOnetimeData.bind(this);
  }

  getOnetimeData = async () => {
    try {
      const value = await AsyncStorage.getItem('@firstTime_key')
      if(value === null) {
        this.setState({isFirstTime: true});
      }
      else{
        this.setState({isFirstTime: false});
      }
    } catch(e) {
      console.log("err: ", e);
    }
  };

  componentWillMount(){
    this.getOnetimeData();
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{
        headerStyle: {
            backgroundColor: Colors.primaryGreen.color,
        },
            headerMode: 'screen',
            headerTintColor: 'white',
            headerTitleAlign:'center',
        }}
        >
            {this.state.isFirstTime ? (
                <Stack.Screen 
                name="OneTime" 
                component={OneTimeStack}
                options={{headerShown: false}}  />
            ): (
                <Stack.Screen 
                name="MainTab" 
                component={MainTabBar}
                options={{headerShown: false}} />
            )}                  
        </Stack.Navigator>

      </NavigationContainer>
      
    );
  }
}

export default MainApp;
  