import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Agreement from '../components/agreement';
import PersonalInfo from '../components/personal_info';
import { Colors } from '../styles/index';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

class OneTimeStack extends Component {
  constructor(props) {
    super(props);

    // this.handleRoute = this.handleRoute.bind(this);
  }

  // handleRoute = async() => {
  //   try{
  //     const value = await AsyncStorage.getItem('@viewedOnboarding');
  
  //     if(value !== null){
  //       var routeName = "MainScreen";
  //       return routeName;
  //     }
  //     else{
  //       var routeName = "LoginScreen";
  //       return routeName
  //     }
  //   }
  //   catch{
  //     console.log("err", err)
  //   }
  // };
  

  // OneTimeStack = createStackNavigator({
  //   AgreementScreen: {
  //     screen: PersonalInfo,
  //     navigationOptions:{
  //       header:null
  //     }
  //   },
  //   MainScreen:{
  //     screen: MainTabBar,
  //     navigationOptions:{
  //       header:null
  //     }
  //   },
  //   initialRouteName:{routeName()}
  // })


  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
                initialRouteName='Agreement'
                screenOptions={{
                headerStyle: {
                    backgroundColor: Colors.primaryGreen.color,
                },
                  headerMode: 'screen',
                  headerTintColor: 'white',
                  headerTitleAlign:'center',
                }}
              >
                <Stack.Screen 
                  name="Agreement" 
                  component={Agreement} />
                <Stack.Screen 
                  name="PersonalInfo" 
                  component={PersonalInfo} />
                  
        </Stack.Navigator>

      </NavigationContainer>
      
    );
  }
}

export default OneTimeStack;
  