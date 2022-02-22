import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Agreement from '../components/agreement';
import PersonalInfo from '../components/personal_info';
import { Colors } from '../styles/index';
import { NavigationContainer } from '@react-navigation/native';
import MainTabBar from './main_tab_bar';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();

class OneTimeStack extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state={
  //     isFirstTime:false
  //   }
  //   this.getOnetimeData = this.getOnetimeData.bind(this);
  // }

  // getOnetimeData = async () => {
  //   try {
  //     const value = await AsyncStorage.getItem('@firstTime_key')
  //     if(value === null) {
  //       return true;
  //     }
  //     else{
  //       return false;
  //     }
  //   } catch(e) {
  //     console.log("err: ", e);
  //   }
  // };

  // componentDidMount(){
  //   let isFirstTimeData = this.getOnetimeData();
  //   this.setState({isFirstTime: isFirstTimeData});
  // }
  
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
                  name="About you" 
                  component={PersonalInfo} />

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
  