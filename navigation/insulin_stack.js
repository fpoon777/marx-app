import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/home';
import InsulinPage0 from '../components/insulinPages/insulin_page_0';
import InsulinPage1 from '../components/insulinPages/insulin_page_1';
import InsulinPagePens from '../components/insulinPages/insulin_page_pens';
import Summary from '../components/summary';
import { Colors } from '../styles/index';

// import VideoList from '../components/video_list';
// import VideoDetail from '../components/video_detail';

const Stack = createStackNavigator();

// nest stack navigator to handle two internal views
// "name" prop is the name of the route
const InsulinStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerMode: 'screen',
        headerTintColor: '#1fcc79',
        // headerShown: false,
        // header : 'Insulin Calculator',
      }}
    >
      <Stack.Screen 
        name="Home" 
        component={Home} />
      <Stack.Screen 
        name="InsulinPage0" 
        component={InsulinPage0}
        options={{
          title: "Insulin Calculator"
        }} />
      <Stack.Screen 
        name="InsulinPage1" 
        component={InsulinPage1} 
        options={{title: "Insulin Calculator",}} 
      />
      <Stack.Screen 
        name="InsulinPagePens" 
        component={InsulinPagePens} 
        options={{title: "Insulin Calculator",}} 
      />      
      <Stack.Screen 
        name="Summary" 
        component={Summary} 
        options={{
          title: "Insulin Calculator",
          headerStyle:{
            backgroundColor: Colors.primaryGreen.color,
          },
          headerTintColor: 'white'
        }}
      />

    </Stack.Navigator>
  );
}

export default InsulinStack;