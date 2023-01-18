import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import InsulinStack from './insulin_stack';
import { Colors } from '../styles/index';
import FeedbackStack from './feedback_stack';
import AdaInfoStack from './ada_info_stack';

const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer independent={true}>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused }) => {
              let iconName;

              if (route.name === 'Ada Info') {
                iconName = 'info-circle';
              }
              else if (route.name === 'Home') {
                iconName = 'home';
              }
              else if (route.name === "Feedback"){
                iconName = 'comment-o'
              }

              return <Ionicons name={iconName} size={30} color={focused ? Colors.primaryGreen.color : 'grey'} />;
            },
          })}
        >
        <Tab.Screen name="Home" options={{headerShown: false}} component={InsulinStack} />
        {/* <Tab.Screen name="Ada Info" options={{headerShown: false}} component={AdaInfoStack} /> */}
        <Tab.Screen name="Feedback" options={{headerShown: false}} component={FeedbackStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;