import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Agreement from '../components/agreement';
import PersonalInfo from '../components/personal_info';
import PersonalInfo1 from '../components/personal_info_1';
import { Colors } from '../styles/index';
import { NavigationContainer } from '@react-navigation/native';
import MainTabBar from './main_tab_bar';

const Stack = createStackNavigator();

class OneTimeStack extends Component {
  render() {
    return (
      <NavigationContainer independent={true}>
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
                  component={Agreement}
                  options={{headerShown: false}} />
                <Stack.Screen 
                  name="About you (Page 1)" 
                  component={PersonalInfo} />
                <Stack.Screen 
                  name="About you (Page 2)" 
                  component={PersonalInfo1} />
                <Stack.Screen 
                  name="MainTab" 
                  component={MainTabBar}
                  options={{headerShown: false}} />
                  
        </Stack.Navigator>

      </NavigationContainer>
      
    );
  }
}

export default OneTimeStack;
  