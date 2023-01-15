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

const daySupply = [{value: '30 days'}, {value: '60 days'},{value: '90 days'},{value: 'Custom'}];


class InsulinPage2 extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      daySupply:0,
      customClicked: false,
    };
    this.productType = this.props.route.params.productType,
    this.dailyUnit = this.props.route.params.dailyUnit,
    this.deviceType = this.props.route.params.deviceType,

    this.textInput = '';
    this.handleNextPage = this.handleNextPage.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);

    this.dayButton = React.createRef();
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
    if(this.state.daySupply <= 0 ||  isNaN(this.state.daySupply)){
      alert("Please enter a value greater than 0");
    }
    else{
      // var selectedProduct = allProducts.find(product => product.name === this.productType);

      // let penSizeVal = 0;
      // let strengthVal = 0;

      // if (this.deviceType === 'Pen'){
      //   let penData = selectedProduct.penData.find(pen => pen.dailyUnit === this.dailyUnit);
      //   penSizeVal = penData.penSize;
      //   strengthVal = penData.strength;
      // }

      this.props.navigation.navigate(
        'Summary',
        {
          dailyUnit: this.dailyUnit,
          deviceType: this.deviceType,
          productType: this.productType,
          daySupply: this.state.daySupply,
        }
      )
    }
  }

  //handle reset
  handleReset = () => {
    this.setState(
      { 
        customClicked: false,
        daySupply:0,
      }
    )
    this.textInput.clear();
    this.dayButton.current.handleReset();
  }

  handleTextInput = (e) => {
    this.setState({"daySupply": parseInt(e)});
  }

  render() {
      return (
        <ScrollView showsVerticalScrollIndicator={false}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.container}
        >
          <View style={styles.otherContainer}>
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
                placeholder={Strings.enterNumberOfDaysText}/>
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
    height: height/4,
  },
  hideContainer:{
    marginTop: 10,
    opacity:0
  },
  separator:{
    width: 10
  }
});

export default InsulinPage2;