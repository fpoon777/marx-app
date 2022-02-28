import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, MyFonts} from '../../styles/index';
import LargeButton from '../../gadgets/large_button';
import * as Strings from '../../gadgets/strings';
import RadioButton from '../../gadgets/radio_button';
import DropdownMenu from '../../gadgets/dropdown_menu';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get("screen");

const daySupply = [{value: '30 days'}, {value: '60 days'},{value: '90 days'},{value: 'Custom'}];

class InsulinPage1 extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      productType: 'None',
      daySupply:0,
      customClicked: false,
      resetDropdown: false,
    };
    this.deviceData = this.props.route.params.listData,
    this.textInput = '';
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleDaySelection = this.handleDaySelection.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);

    this.dayButton = React.createRef();
    this.dropdown = React.createRef();
  }

  handleProductSelection = (e) => {
    this.setState({'productType': e});
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
    if(this.state.productType == 'None' && this.state.daySupply <= 0){
      alert("Please enter values for two fields")
    }
    else if(this.state.productType == 'None'){
      alert("Please choose a product");
    }
    else if(this.state.daySupply <= 0){
      alert("Please choose days supply");
    }
    else{
      let penSizeVal = 0;
      let strengthVal = 0;
      if(this.props.route.params.deviceType == 'Pens'){
        penSizeVal = this.props.route.params.penSize;
        strengthVal = this.props.route.params.strength;
      }

      this.props.navigation.navigate(
        'Summary',
        {
          dailyUnit: this.props.route.params.dailyUnit,
          deviceType: this.props.route.params.deviceType,
          penSize: penSizeVal,
          strength: strengthVal,
          productType: this.state.productType,
          daySupply: this.state.daySupply,
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
        resetDropdown: !this.state.resetDropdown
      }
    )
    // this.handleResetDropdown();
    this.dropdown.current.handleReset();
    this.dayButton.current.handleReset();
  }

  handleTextInput = (e) => {
    this.setState({"daySupply": parseInt(e)});
  }

  render() {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.otherContainer}>
            <Text style={styles.promptText}>{Strings.productTypeText}</Text>
            <View style={styles.dropDownContainer}>
              <DropdownMenu 
              dataList={this.deviceData} 
              onSelect={this.handleProductSelection}
              resetDropdown = {this.state.resetDropdown}
              placeholderText = "Select a Product"
              ref = {this.dropdown}
              key = {this.state.resetDropdown}
              />
            </View>

            <Text style={styles.promptText}>{Strings.daySupplyText}</Text>
            <RadioButton 
              data = {daySupply} 
              number='4' 
              onSelect={this.handleDaySelection}
              ref={this.dayButton}/>

            <View style={this.state.customClicked === false? styles.hideContainer: styles.customContainer}>
              <Text style={styles.promptText}>{Strings.enterNumberOfDaysText}</Text>
              <TextInput 
                ref={input => { this.textInput = input }}
                keyboardType='numeric'
                maxLength={4}
                onChangeText={this.handleTextInput}
                style={styles.smallInputBox} 
                placeholder={Strings.enterDailyUnitsText}/>
            </View>
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
        </View>
                  
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
    height: height/16,
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