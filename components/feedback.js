import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import DropdownMenu from '../gadgets/dropdown_menu';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, Colors} from '../styles/index';
import * as Strings from '../gadgets/strings';
import LargeButton from '../gadgets/large_button';
import { MyFonts } from '../styles/text_style';


const reasons = [
  {label: "New Drugs"}, 
  {label:"Bugs/Issues"}, 
  {label:"Incorrect Information"}, 
  {label: "Other"}
];

class Feedback extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.otherContainer}>
          <Text style={styles.promptText}>{Strings.emailAddressText}</Text>
          <TextInput 
            style={styles.smallInputBox} 
            placeholder={Strings.emailAddressPlaceholderText}/>

          <Text style={styles.promptText}>{Strings.selectFeedbackText}</Text>
          <DropdownMenu 
            dataList={reasons} 
            placeholderText={Strings.selectFeedbackText}

            />

          <Text style={styles.promptText}>{Strings.detailText}</Text>
          <TextInput 
            style={styles.largeInputBox} 
            placeholder={Strings.enterDetailsPlaceholderText}/>
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
    alignSelf: 'center',
  },
  otherContainer:{
    marginTop: 10,
    flex: 5,
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
  },
  largeInputBox:{
    ...InputBoxes.smallRounded,
    marginTop: 5,
    marginBottom: 10,
    height: InputBoxes.smallRounded.height*2.5,
  }

});

export default Feedback;