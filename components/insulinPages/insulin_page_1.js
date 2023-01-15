// Page 2 contains total daily units
import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView, KeyboardAvoidingView, Platform  } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, MyFonts} from '../../styles/index';
import LargeButton from '../../gadgets/large_button';
import * as Strings from '../../gadgets/strings';
import RadioButton from '../../gadgets/radio_button';
import DropdownMenu from '../../gadgets/dropdown_menu';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");
// const deviceData = [{value: 'Vials'}, {value: 'Pens'}];
const daySupply = [{value: '30 days'}, {value: '60 days'},{value: '90 days'},{value: 'Custom'}];

class InsulinPage1 extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      // productType: 'None',
      dailyUnit: 0,
      // daySupply:0,
      // customClicked: false,
      resetDropdown: false,
      deviceType:'None',
    };
    this.productType = this.props.route.params.productType,
    this.deviceData = this.props.route.params.deviceData,
    this.textInput = '';
    // this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleDaySelection = this.handleDaySelection.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);

    this.handleSelection = this.handleSelection.bind(this);

    // this.radioButtons = React.createRef();
    this.dropdown = React.createRef();
    this.dayButton = React.createRef();
  }

  // handleProductSelection = (e) => {
  //   this.setState({'productType': e});
  // }

  //handle radio button selection
  handleSelection = (e) => {
    this.setState({'deviceType': e});
  }

  handleDaySelection = (e) => {
    switch (e) {
      case '30 days':
        this.setState({'daySupply': 30, 'customClicked': false});
        break;
      case '60 days':
        this.setState({'daySupply': 60, 'customClicked': false});
        break;
      case '90 days':
        this.setState({'daySupply': 90, 'customClicked': false});
        break;
      case 'Custom':
        this.setState({'customClicked': true})
        break;
      default:
        console.log(`Sorry, something unexpected happened`);
    }
  }

  handleNextPage = () =>{
    if(this.state.deviceType == 'None' && this.state.dailyUnit <= 0 ){
      alert("Please enter values for two fields")
    }
    else if(this.state.deviceType == 'None'){
      alert("Please choose a available device");
    }
    else if(this.state.dailyUnit <= 0){
      alert("Please enter total daily unit");
    }
    else{
      this.props.navigation.navigate(
        'InsulinPage2',
        {
          dailyUnit: this.state.dailyUnit,
          deviceType: this.state.deviceType,
          productType: this.productType,
        }
      )
    }
  }

  //handle reset
  handleReset = () => {
    this.setState(
      { 
        productType: 'None',
        customClicked: false,
        daySupply:0,
        deviceType:'None',
        resetDropdown: !this.state.resetDropdown,
        dailyUnit: 0,
      }
    )
    // this.handleResetDropdown();
    this.textInput.clear();
    this.dropdown.current.handleReset();
    this.dayButton.current.handleReset();
    // this.radioButtons.current.handleReset();
  }

  // handleTextInput = (e) => {
  //   this.setState({"daySupply": parseInt(e)});
  // }

  //handle text input and parse it to int
  handleTextInput = (e) =>{
    this.setState({'dailyUnit': parseInt(e)})
  }

  render() {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
            {/* <RadioButton 
              data = {deviceData} 
              number='2' 
              onSelect={this.handleSelection} 
              ref={this.radioButtons}/> */}
            <View style={styles.dropDownContainer}>
                <DropdownMenu 
                dataList={this.deviceData} 
                onSelect={this.handleSelection}
                resetDropdown = {this.state.resetDropdown}
                placeholderText = "Select a Device"
                ref = {this.dropdown}
                key = {this.state.resetDropdown}
                />
            </View>
            {/* <Text style={styles.promptText}>{Strings.productTypeText}</Text>
            <View style={styles.dropDownContainer}>
              <DropdownMenu 
              dataList={this.deviceData} 
              onSelect={this.handleProductSelection}
              resetDropdown = {this.state.resetDropdown}
              placeholderText = "Select a Product"
              ref = {this.dropdown}
              key = {this.state.resetDropdown}
              />
            </View> */}

            {/* <Text style={styles.promptText}>{Strings.daySupplyText}</Text>
            <RadioButton 
              data = {daySupply} 
              number='4' 
              onSelect={this.handleDaySelection}
              ref={this.dayButton}/> */}

            {/* <View style={this.state.customClicked === false? styles.hideContainer: styles.customContainer}>
              <Text style={styles.promptText}>{Strings.enterNumberOfDaysText}</Text>
              <TextInput 
                ref={input => { this.textInput = input }}
                keyboardType='numeric'
                maxLength={4}
                onChangeText={this.handleTextInput}
                style={styles.smallInputBox} 
                placeholder={Strings.enterDailyUnitsText}/>
            </View> */}
          </View>

          <View style={styles.fillerContainer} />
          <View style = {styles.buttonContainer}>
              <LargeButton 
                onPress={this.handleReset}
                title="Reset"
                buttonColor="b"
                />
              <View style={styles.separator}></View>
              <LargeButton 
                onPress={this.handleNextPage}
                title={"Next"} 
                buttonColor='g'/>
          </View>
        </KeyboardAvoidingView>
                  
        </ScrollView>
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
  dropDownContainer:{
    alignSelf:'center',
  },
  buttonContainer:{
    ...Buttons.buttonContainer,
    flex:1
  },
  smallInputBox:{
    ...InputBoxes.smallRounded,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: 'center'
  },
  promptText:{
    ...MyFonts.PromptText,
    marginLeft: 20,
  },
  customContainer:{
    alignItems:'flex-start',
    marginTop: 10,
  },
  fillerContainer:{
    height: height/3,
  },
  hideContainer:{
    marginTop: 10,
    opacity:0
  },
  separator:{
    width: 10
  }
});

export default InsulinPage1;