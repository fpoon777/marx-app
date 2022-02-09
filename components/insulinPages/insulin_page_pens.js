import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Buttons, InputBoxes, MyFonts} from '../../styles/index';
import LargeButton from '../../gadgets/large_button';
import * as Strings from '../../gadgets/strings';
import RadioButton from '../../gadgets/radio_button';
import { penData } from '../../assets/data';

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

    this.penSizeButtons = React.createRef();
    this.strengthButtons = React.createRef();
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
      let listData = penData.filter(item => {
        if(item.strength == this.state.strength && item.size == this.state.penSize){
          return true;
        }
        return false;
        });

      this.props.navigation.navigate(
        'InsulinPage1',
        {
          dailyUnit: this.props.route.params.dailyUnit,
          deviceType: this.props.route.params.deviceType,
          penSize: this.state.penSize,
          strength: this.state.strength,
          listData: listData
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
    this.penSizeButtons.current.handleReset();
    this.strengthButtons.current.handleReset();
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.otherContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.promptText}>{Strings.penSizeText}</Text>
            </View>
            <RadioButton 
              data = {penSizeData} 
              number='2'
              onSelect={this.handlePenSelection}
              ref={this.penSizeButtons}/>

            <View style={styles.titleContainer}>
              <Text style={styles.promptText}>{Strings.strengthText}</Text>
            </View>

            <RadioButton 
              data = {strengthData} 
              number='4'
              onSelect={this.handleStrengthSelection}
              ref={this.strengthButtons}/>
          </View>
          <View style={styles.fillerContainer}></View>
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
    justifyContent:'flex-start',
    
  },
  otherContainer:{
    marginTop: 10,
    flex: 2,
    alignContent:'flex-start'
  },
  fillerContainer:{
    flex:2
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
  titleContainer:{
    marginLeft: 15,
  }
});

export default InsulinPagePens;