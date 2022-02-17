import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DropdownMenu from '../gadgets/dropdown_menu';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, Colors} from '../styles/index';
import * as Strings from '../gadgets/strings';
import LargeButton from '../gadgets/large_button';
import { MyFonts } from '../styles/text_style';

import * as personalData from './personal_info_data/personal_info_data';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toSend:{
        emailAddress: "",
        feedbackReason: "",
        detail: ""
      } 
    };
    this.emailInput = "";
    this.detailInput = "";

    this.handleReason = this.handleReason.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handleDetailInput = this.handleDetailInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.feedbackReason = React.createRef();
  }

  handleReason = (e) => {
    this.setState({toSend:{feedbackReason: e}})
  }

  handleEmailInput = (e) =>{
    this.setState({toSend:{emailAddress: e}})
  }

  handleDetailInput = (e) => {
    this.setState({toSend:{detail: e}})
  }

  handleSubmit = () =>{
    if(this.state.toSend.feedbackReason === "" 
      || this.state.toSend.emailAddress === "" 
      || this.state.toSend.detail === ""){
      alert("Please enter all required fields")
    }
    else{
      this.handleReset();
    }
  }

  //handle reset
  handleReset = () => {
    this.setState({
      toSend:{
        emailAddress: "",
        feedbackReason: "",
        detail: ""
      } 
    })

    this.emailInput.clear();
    this.detailInput.clear();
    this.feedbackReason.current.handleReset();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.otherContainer}>
          <Text style={styles.promptText}>{Strings.usernameText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterUsernameText}
              />
          </View>

          <Text style={styles.promptText}>{Strings.ageText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterAgeText}
              />
          </View>

          <Text style={styles.promptText}>{Strings.genderText}</Text>
          <DropdownMenu 
            dataList={personalData.genderData} 
            />

          <Text style={styles.promptText}>{Strings.raceText}</Text>
          <DropdownMenu 
            dataList={personalData.raceData} 
            />

          <Text style={styles.promptText}>{Strings.stateText}</Text>
          <DropdownMenu 
            dataList={personalData.stateData} 
            />

          <Text style={styles.promptText}>{Strings.educationText}</Text>
          <DropdownMenu 
            dataList={personalData.educationData} 
            />

          <Text style={styles.promptText}>{Strings.jobTitleText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterJobTitleText}
              />
          </View>

          <Text style={styles.promptText}>{Strings.yearExperienceText}</Text>
          <DropdownMenu 
            dataList={personalData.yearData} 
            />

          <Text style={styles.promptText}>{Strings.currentEmployerText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterEmployerText}
              />
          </View>


          <Text style={styles.promptText}>{Strings.emailAddressReText}</Text>
          <Text>{Strings.emailAgreementText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterEmailText}
              />
          </View>

          <View style={styles.fillerContainer} />

          <View style = {styles.buttonContainer}>
            <LargeButton 
              title="Submit"
              buttonColor="g"
              />
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

export default PersonalInfo;