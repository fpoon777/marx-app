import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AdaInfo from '../components/ada_info';
import { Colors } from '../styles/index';

const Stack = createStackNavigator();

const AdaInfoStack = () => {
    return (
      <Stack.Navigator
        initialRouteName='ADA Guidelines'
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
          name="ADA Guidelines" 
          component={AdaInfo} />
          
    </Stack.Navigator>
    )
}

export default AdaInfoStack