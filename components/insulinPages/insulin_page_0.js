import React, { Component } from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, MyFonts} from '../../styles/index';
import LargeButton from '../../gadgets/large_button';
import * as Strings from '../../gadgets/strings';
import RadioButton from '../../gadgets/radio_button';
import { vialData } from '../../assets/data';

const deviceData = [{value: 'Vials'}, {value: 'Pens'}];

class InsulinPage0 extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      dailyUnit: 0,
      deviceType:'None',
    };
    this.textInput = "";
    // this.textInput = '';
    this.handleSelection = this.handleSelection.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // handle reset child components
    this.radioButtons = React.createRef();
  }

  //handle radio button selection
  handleSelection = (e) => {
    this.setState({'deviceType': e});
  }

  //handle text input and parse it to int
  handleTextInput = (e) =>{
    this.setState({'dailyUnit': parseInt(e)})
  }

  //handle reset
  handleReset = () => {
    this.setState(
      { 
        dailyUnit: 0,
        deviceType:'None',
      }
    );
    this.textInput.clear();
    this.radioButtons.current.handleReset();
  }

  //value check if both fields have been entered
  handleNextPage = () =>{
    if(this.state.deviceType == 'None' && this.state.dailyUnit <= 0 ){
      alert("Please enter values for two fields")
    }
    else if(this.state.deviceType == 'None'){
      alert("Please choose a device type");
    }
    else if(this.state.dailyUnit <= 0 ||  isNaN(this.state.dailyUnit)){
      alert("Please enter a value greater than 0");
    }
    else{
      if(this.state.deviceType == 'Vials'){
        this.props.navigation.navigate(
          'InsulinPage1', 
          {
            dailyUnit: this.state.dailyUnit,
            deviceType: this.state.deviceType,
            listData:vialData
          })
      }
      else{
        this.props.navigation.navigate(
          'InsulinPagePens', 
          {
            dailyUnit: this.state.dailyUnit,
            deviceType: this.state.deviceType,
          })
      }
    }
  }

  render() {
      return (
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.otherContainer}>
            <Text style={styles.promptText}>{Strings.totalDailyUnitsText}</Text>
            <TextInput 
              ref={input => { this.textInput = input }}
              keyboardType='numeric'
              maxLength={5}
              onChangeText={this.handleTextInput}
              style={styles.smallInputBox} 
              placeholder={Strings.enterDailyUnitsText}/>

            <Text style={styles.promptText}>{Strings.deviceTypeText}</Text>
            <RadioButton 
              data = {deviceData} 
              number='2' 
              onSelect={this.handleSelection} 
              ref={this.radioButtons}/>
          </View>
          <View style = {styles.buttonContainer}>
              <LargeButton 
                onPress = {this.handleReset}
                title="Reset"
                buttonColor="b"
                />
              <View style={styles.separatorStyle}></View>
              <LargeButton 
                onPress={this.handleNextPage}
                title={"Next"} 
                buttonColor='g'/>
          </View>
        </KeyboardAvoidingView>
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
  },
  separatorStyle:{
    width: 10
  }
});

export default InsulinPage0;