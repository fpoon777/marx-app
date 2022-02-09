import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Feedback from '../components/feedback';
import { Colors } from '../styles/index';

const Stack = createStackNavigator();

const FeedbackStack = () => {
    return (
      <Stack.Navigator
        initialRouteName='Feedback'
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
          name="Feedback" 
          component={Feedback} />
          
    </Stack.Navigator>
    )
}

export default FeedbackStack