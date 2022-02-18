import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DropdownMenu from '../gadgets/dropdown_menu';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, Colors} from '../styles/index';
import * as Strings from '../gadgets/strings';
import LargeButton from '../gadgets/large_button';
import { MyFonts } from '../styles/text_style';
import {storeFeedback} from '../gadgets/firebase_util';


const reasons = [
  {label: "New Drugs"}, 
  {label:"Bugs/Issues"}, 
  {label:"Incorrect Information"}, 
  {label: "Other"}
];

class Feedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailAddress: "",
      feedback: "",
      detail: ""
    };
    this.emailInput = "";
    this.detailInput = "";

    this.handleFeedbackReason = this.handleFeedbackReason.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleDetailInput = this.handleDetailInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.feedbackReason = React.createRef();
  }

  handleFeedbackReason = (e) => {
    this.setState({feedback: e})
  }

  handleEmailInput = (e) =>{
    this.setState({emailAddress: e})
  }

  handleDetailInput = (e) => {
    this.setState({detail: e})
  }

  handleSubmit = () =>{
    if(this.state.feedback === "" 
      || this.state.emailAddress === "" 
      || this.state.detail === ""){
      alert("Please enter all required fields")
    }
    else{
      storeFeedback(this.state.emailAddress,
        this.state.feedback,
        this.state.detail);
      this.handleReset();
      alert("Your feedback has been sent!");
    }
  }

  //handle reset
  handleReset = () => {
    this.setState({
      emailAddress: "",
      feedback: "",
      detail: ""
    })

    this.emailInput.clear();
    this.detailInput.clear();
    this.feedbackReason.current.handleReset();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.otherContainer}>
          <Text style={styles.promptText}>{Strings.emailAddressText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              ref={input => { this.emailInput = input }}
              style={styles.smallInputBox} 
              placeholder={Strings.emailAddressPlaceholderText}
              keyboardType='email-address' 
              maxLength={40}
              onChangeText={this.handleEmailInput}
              />
          </View>
          

          <Text style={styles.promptText}>{Strings.selectFeedbackText}</Text>
          <DropdownMenu 
            dataList={reasons} 
            placeholderText={Strings.selectFeedbackText}
            onSelect={this.handleFeedbackReason}
            />

          <Text style={styles.promptText}>{Strings.detailText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              ref={input => { this.detailInput = input }}
              style={styles.largeInputBox} 
              placeholder={Strings.enterDetailsPlaceholderText}
              onChangeText={this.handleDetailInput}
              maxLength={500}/>
          </View>

          <View style={styles.fillerContainer} />

          <View style = {styles.buttonContainer}>
            <LargeButton 
              onPress = {this.handleReset}
              title="Reset"
              buttonColor="b"
              />
            <LargeButton 
              onPress={this.handleSubmit}
              title={"Submit"} 
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
  },
  inputContainer:{
    alignSelf:'center'
  },
  fillerContainer:{
    height: 25,
  }

});

export default Feedback;