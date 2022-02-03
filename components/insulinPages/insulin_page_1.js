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
  constructor(props) {
    super(props);

    this.state = { 
      productType: 'None',
      daySupply:0,
    };
    // this.textInput = '';
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.handleDaySelection = this.handleDaySelection.bind(this);
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleProductSelection = (e) => {
    this.setState({'productType': e});
    alert('product type is '+ e);
  }

  // tempFunction = ()

  handleDaySelection = (e) => {
    switch (e) {
      case '30 days':
        this.setState({'daySupply': 30});
        break;
      case '60 days':
        this.setState({'daySupply': 60});
        break;
      case '90 days':
        this.setState({'daySupply': 90});
        break;
      case 'Custom':
        alert("Coming soon")
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
      // if(this.props.route.params.state.penSize != null){
        
      // }
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
        daySupply:0,
      }
    )
  }

  render() {
      return (
        <View style={styles.container}>
          <View style={styles.otherContainer}>
            <Text style={styles.promptText}>{Strings.productTypeText}</Text>
            <DropdownMenu 
            dataList={deviceType} 
            placeholderText={Strings.selectProductText}
            onSelect={this.handleProductSelection}

            />

            <Text style={styles.promptText}>{Strings.deviceTypeText}</Text>
            <RadioButton data = {daySupply} number='4' onSelect={this.handleDaySelection}/>
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