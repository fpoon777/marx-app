import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, MyFonts} from '../../styles/index';
import LargeButton from '../../gadgets/large_button';
import * as Strings from '../../gadgets/strings';
import RadioButton from '../../gadgets/radio_button';

const deviceData = [{value: 'Vials'}, {value: 'Pens'}];

class InsulinPage0 extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.otherContainer}>
            <Text style={styles.promptText}>{Strings.totalDailyUnitsText}</Text>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterDailyUnitsText}/>

            <Text style={styles.promptText}>{Strings.deviceTypeText}</Text>
            <RadioButton data = {deviceData} number='2'/>
          </View>
          <View style = {styles.buttonContainer}>
              <LargeButton 
                title="Reset"
                buttonColor="b"
                />
              <LargeButton 
                onPress={() => this.props.navigation.navigate('InsulinPagePens')}
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
  }

});

export default InsulinPage0;