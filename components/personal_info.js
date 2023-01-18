import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DropdownMenu from '../gadgets/dropdown_menu';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, Colors} from '../styles/index';
import * as Strings from '../gadgets/strings';
import LargeButton from '../gadgets/large_button';
import { MyFonts } from '../styles/text_style';

import * as personalData from './personal_info_data/personal_info_data';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import validator from 'validator';

//update onetime storage
import AsyncStorage from '@react-native-async-storage/async-storage';

class PersonalInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      age: 0,
      gender: "",
      race: "",
      state: "",
      education: "",
      job: "",
      year: "",
      // yearInTitle: "",
      employer: "",
      // difficulty: "",
      // timeToPrescribe: "",
      email: "Not provided",
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleEmployer = this.handleEmployer.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.handleGender = this.handleGender.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.handleYear = this.handleYear.bind(this);

    this.handleNext = this.handleNext.bind(this);
  }
  //handlers for text input
  handleUsername = (e) => {
    this.setState({username: e});
  }

  handleAge = (e) => {
    this.setState({age: parseInt(e)});
  }


  handleEmployer = (e) => {
    this.setState({employer: e});
  }
  
  handleEmail = (e) => {
    this.setState({email: e});
  }

  //handlers for dropdown menus
  handleGender = (e) => {
    this.setState({gender: e});
  }

  handleRace = (e) => {
    this.setState({race: e});
  }

  handleState = (e) => {
    this.setState({state: e});
  }

  handleEducation = (e) => {
    this.setState({education: e});
  }

  handleYear = (e) => {
    this.setState({year: e});
  }

  //handle firebase submission.
  handleNext = () =>{
    if(this.state.username === "" ){
      alert("Please enter all required fields");
    }
    else if (this.state.username.length < 5){
      alert ("Please enter a username that's longer than 5 characters");
    }
    else if(isNaN(this.state.age)){
      alert ("Please enter a valid age");
    }
    else if(this.state.email !== "Not provided" && !validator.isEmail(this.state.email)){
      alert ("Please enter a valid email");
    }
    else{
      const dataObject = {
        username: this.state.username,
        age: this.state.age,
        gender: this.state.gender,
        race: this.state.race,
        state: this.state.state,
        education: this.state.education,
        job: this.state.job,
        year: this.state.year,
        employer: this.state.employer,
        email: this.state.email,
      }

      // storePersonalInfo(dataObject);
      // this.props.navigation.replace('MainTab', { screen: 'Home' });
      // this.storeData();
      this.props.navigation.navigate(
        'About you (Page 2)',
        {
          dataObject: dataObject,
        }
      )
    }
  }


  render() {
    return (
      <KeyboardAwareScrollView>
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        >

          <Text style={styles.promptText}>{Strings.usernameText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterUsernameText}
              onChangeText={this.handleUsername}
              maxLength={10}
              />
          </View>

          <Text style={styles.promptText}>{Strings.emailAddressReText}</Text>
          <Text style={styles.hintText}>{Strings.emailAgreementText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterEmailText}
              onChangeText={this.handleEmail}
              />
          </View>

          <Text style={styles.promptText}>{Strings.ageText}</Text>
          <View style={styles.inputContainer}>
            <DropdownMenu 
              dataList={personalData.ageData} 
              placeholderText = {Strings.enterAgeText}
              onSelect={this.handleAge}
              />
          </View>

          <Text style={styles.promptText}>{Strings.genderText}</Text>
          <View style={styles.dropDownContainer}>
            <DropdownMenu 
              dataList={personalData.genderData} 
              placeholderText = {Strings.enterGenderText}
              onSelect={this.handleGender}
              />
          </View>


          <Text style={styles.promptText}>{Strings.raceText}</Text>
          <View style={styles.dropDownContainer}>
            <DropdownMenu 
              dataList={personalData.raceData} 
              placeholderText = {Strings.enterRaceText}
              onSelect={this.handleRace}
              />
          </View>

          <Text style={styles.promptText}>{Strings.stateText}</Text>
          <View style={styles.dropDownContainer}>
          <DropdownMenu 
            dataList={personalData.stateData} 
            placeholderText = {Strings.enterStateText}
            onSelect={this.handleState}
            />
          </View>

          <Text style={styles.promptText}>{Strings.educationText}</Text>
          <View style={styles.dropDownContainer}>
          <DropdownMenu 
            dataList={personalData.educationData} 
            placeholderText = {Strings.enterDegreeText}
            onSelect={this.handleEducation}
            />
          </View>

          <Text style={styles.promptText}>{Strings.yearExperienceText}</Text>
          <View style={styles.dropDownContainer}>
          <DropdownMenu 
            dataList={personalData.yearData} 
            placeholderText = {Strings.enterRangeText}
            onSelect={this.handleYear}
            />
          </View>

          <Text style={styles.promptText}>{Strings.currentEmployerText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterEmployerText}
              onChangeText={this.handleEmployer}
              maxLength = {30}
              />
          </View>


          {/* <Text style={styles.promptText}>{Strings.jobTitleText}</Text>
          <View style={styles.inputContainer}>
            <DropdownMenu 
              dataList={personalData.jobData} 
              placeholderText = {Strings.enterJobTitleText}
              onSelect={this.handleJob}
              />
          </View>

          <Text style={styles.promptText}>{Strings.yearInTitle}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterYearText}
              onChangeText={this.handleYearIntitle}
              maxLength = {3}
              />
          </View>

          <Text style={styles.promptText}>{Strings.difficultyPrescribe}</Text>
          <View style={styles.inputContainer}>
          <DropdownMenu 
            dataList={personalData.difficultyData} 
            placeholderText = {Strings.enterDifficultyText}
            onSelect={this.handleDifficulty}
            />
          </View>

          <Text style={styles.promptText}>{Strings.timeToPrescribe}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterTimeText}
              onChangeText={this.handleTimeToPrescribe}
              maxLength = {3}
              />
          </View>


          <Text style={styles.promptText}>{Strings.emailAddressReText}</Text>
          <Text style={styles.hintText}>{Strings.emailAgreementText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterEmailText}
              onChangeText={this.handleEmail}
              />
          </View>

          <View style={styles.fillerContainer} /> */}
          <View style={styles.fillerContainer} />

          <View style = {styles.buttonContainer}>
            <LargeButton 
              title="Next"
              buttonColor="g"
              onPress={this.handleNext}
              />
          </View>

        
      </ScrollView>
      </KeyboardAwareScrollView>
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
    justifyContent:'center',
  },
  buttonContainer:{
    ...Buttons.buttonContainer,
    alignSelf:'center'
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
  hintText:{
    marginLeft: 23,
    marginRight: 23,
    color: Colors.secondaryText.color
  },
  largeInputBox:{
    ...InputBoxes.smallRounded,
    marginTop: 5,
    marginBottom: 10,
    height: InputBoxes.smallRounded.height*2.5,
  },
  dropDownContainer:{
    alignSelf:'center',
  },
  inputContainer:{
    alignSelf:'center'
  },
  
  fillerContainer:{
    height: 25,
  },
});

export default PersonalInfo;