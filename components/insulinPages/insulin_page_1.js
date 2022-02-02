import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, MyFonts} from '../../styles/index';
import LargeButton from '../../gadgets/large_button';
import * as Strings from '../../gadgets/strings';
import RadioButton from '../../gadgets/radio_button';
import DropdownMenu from '../../gadgets/dropdown_menu';

const daySupply = [{value: '30 days'}, {value: '60 days'},{value: '90 days'},{value: 'Custom'}];

const deviceType = [
  {
      key: 1,
      label: "Novolin 10ml U100",
  },
  {   
      key:2,
      label: "Novolin2 10ml U100",
  },
  {
      key:3,
      label: "Novolin3 10ml U100",
  },
  {
      key:4,
      label: "Novolin4 10ml U100",
  },
]

class InsulinPage1 extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.otherContainer}>
            <Text style={styles.promptText}>{Strings.productTypeText}</Text>
            <DropdownMenu 
            dataList={deviceType} 
            placeholderText={Strings.selectProductText}
            />

            <Text style={styles.promptText}>{Strings.deviceTypeText}</Text>
            <RadioButton data = {daySupply} number='4'/>
          </View>
          <View style = {styles.buttonContainer}>
              <LargeButton 
                title="Reset"
                buttonColor="b"
                />
              <LargeButton 
                onPress={() => this.props.navigation.navigate('Summary')}
                title={"Next"} 
                buttonColor='g'/>
          </View>
        </View>
        );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  otherContainer:{
    marginTop: 10,
    flex: 4,
    justifyContent:'flex-start',
  },
  buttonContainer:{
    ...Buttons.buttonContainer,
    flex:1
  },
  smallInputBox:{
    ...InputBoxes.smallRounded,
    marginTop: 5,
    marginBottom: 10
  },
  promptText:{
    ...MyFonts.PromptText,
    marginLeft: 20,
  },
});

export default InsulinPage1;