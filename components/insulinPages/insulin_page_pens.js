import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, MyFonts} from '../../styles/index';
import LargeButton from '../../gadgets/large_button';
import * as Strings from '../../gadgets/strings';
import RadioButton from '../../gadgets/radio_button';

const penSizeData = [{value: '3 ml'}, {value: '10 ml'}];
const strengthData = [{value: 'U100'},{value: 'U200'},{value: 'U300'},{value: 'U500'}]

class InsulinPagePens extends Component {
  render() {
      return (
        <View style={styles.container}>
          <View style={styles.otherContainer}>
            <Text style={styles.promptText}>{Strings.penSizeText}</Text>
            <RadioButton data = {penSizeData} number='2'/>

            <Text style={styles.promptText}>{Strings.strengthText}</Text>
            <RadioButton data = {strengthData} number='4'/>
          </View>
          <View style = {styles.buttonContainer}>
              <LargeButton 
                title="Reset"
                buttonColor="b"
                />
              <LargeButton 
                onPress={() => this.props.navigation.navigate('InsulinPage1')}
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
    justifyContent:'flex-start'
  },
  otherContainer:{
    marginTop: 10,
    // alignItems:'baseline',
    flex: 4,
    // justifyContent:'flex-start',
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

export default InsulinPagePens;