import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';


class OneTimeStack extends Component {
  constructor(props) {
    super(props);

    this.handleRoute = this.handleRoute.bind(this);
  }

  handleRoute = async() => {
    try{
      const value = await AsyncStorage.getItem('@viewedOnboarding');
  
      if(value !== null){
        var routeName = "MainScreen";
        return routeName;
      }
      else{
        var routeName = "LoginScreen";
        return routeName
      }
    }
    catch{
      console.log("err", err)
    }
  };
  

  OneTimeStack = createStackNavigator({
    AgreementScreen: {
      screen: PersonalInfo,
      navigationOptions:{
        header:null
      }
    },
    MainScreen:{
      screen: MainTabBar,
      navigationOptions:{
        header:null
      }
    },
    initialRouteName:{routeName()}
  })


  render() {
    return (
      
    );
  }
}

export default OneTimeStack;
  