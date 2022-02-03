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
  constructor(props) {
    super(props);

    this.state = { 
      penSize: 0,
      strength: 0,
    };
    this.handlePenSelection = this.handlePenSelection.bind(this);
    this.handleStrengthSelection = this.handleStrengthSelection.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handlePenSelection = (e) => {
    if(e == '3 ml'){
      this.setState({'penSize': 3});
    }
    else{
      this.setState({'penSize': 10});
    }
  }

  handleStrengthSelection = (e) => {
    switch (e) {
      case 'U100':
        this.setState({'strength': 100});
        break;
      case 'U200':
        this.setState({'strength': 200});
        break;
      case 'U300':
        this.setState({'strength': 300});
        break;
      case 'U500':
        this.setState({'strength': 500});
        break;
      default:
        console.log(`Sorry, something unexpected happened`);
    }
  }
  
  handleNextPage = () =>{
    if(this.state.penSize <= 0 && this.state.strength <= 0){
      alert("Please enter values for two fields")
    }
    else if(this.state.penSize <= 0){
      alert("Please choose a pen size");
    }
    else if(this.state.strength <= 0){
      alert("Please choose a strength");
    }
    else{
      this.props.navigation.navigate(
        'InsulinPage1',
        {
          dailyUnit: this.props.route.params.dailyUnit,
          deviceType: this.props.route.params.deviceType,
          penSize: this.state.penSize,
          strength: this.state.strength,
        }
      )
    }
  }

  //handle reset
  handleReset = () => {
    this.setState(
      { 
        penSize: 0,
        strength:0,
      }
    )
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.otherContainer}>
            <Text style={styles.promptText}>{Strings.penSizeText}</Text>
            <RadioButton data = {penSizeData} number='2'onSelect={this.handlePenSelection}/>

            <Text style={styles.promptText}>{Strings.strengthText}</Text>
            <RadioButton data = {strengthData} number='4'onSelect={this.handleStrengthSelection}/>
          </View>
          <View style = {styles.buttonContainer}>
              <LargeButton 
                onPress={this.handleReset}
                title="Reset"
                buttonColor="b"
                />
              <LargeButton 
                onPress={this.handleNextPage}
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