import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AdaInfo from '../components/ada_info';
import Feedback from '../components/feedback';
import Ionicons from 'react-native-vector-icons/FontAwesome';
import InsulinStack from './insulin_stack';
import { Colors } from '../styles/index';


const Tab = createBottomTabNavigator();

const MainTabBar = () => {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Ada Info" component={AdaInfo} />
        <Tab.Screen name="Feedback" component={Feedback} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainTabBar;