import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import DropdownMenu from '../gadgets/dropdown_menu';
import { TextInput } from 'react-native-gesture-handler';
import { Buttons, InputBoxes, Colors} from '../styles/index';
import * as Strings from '../gadgets/strings';
import LargeButton from '../gadgets/large_button';
import { MyFonts } from '../styles/text_style';

import * as personalData from './personal_info_data/personal_info_data';
import { storePersonalInfo } from '../gadgets/firebase_util';

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
      employer: "",
      email: "Not provided",
      test:""
    };

    this.handleUsername = this.handleUsername.bind(this);
    this.handleAge = this.handleAge.bind(this);
    this.handleJob = this.handleJob.bind(this);
    this.handleEmployer = this.handleEmployer.bind(this);
    this.handleEmail = this.handleEmail.bind(this);

    this.handleGender = this.handleGender.bind(this);
    this.handleRace = this.handleRace.bind(this);
    this.handleState = this.handleState.bind(this);
    this.handleEducation = this.handleEducation.bind(this);
    this.handleYear = this.handleYear.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.storeData = this.storeData.bind(this);
  }
  //handlers for text input
  handleUsername = (e) => {
    this.setState({username: e});
  }

  handleAge = (e) => {
    this.setState({age: parseInt(e)});
  }

  handleJob = (e) => {
    this.setState({job: e});
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

  storeData = async () => {
    try {
      await AsyncStorage.setItem('@firstTime_key', "notFirstTime");
    } catch (e) {
      console.log("err: ", e);
    }
  }

  //handle firebase submission.
  handleSubmit = () =>{
    if(this.state.username === "" 
      || this.state.age === "" 
      || this.state.gender === ""
      || this.state.race === ""
      || this.state.state === ""
      || this.state.education === ""
      || this.state.job === ""
      || this.state.year === ""
      || this.state.employer === ""
      || this.state.email === ""
      ){
      alert("Please enter all required fields")
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
        email: this.state.email
      }

      storePersonalInfo(dataObject);
      this.props.navigation.replace('MainTab', { screen: 'Home' });
    }
    this.storeData().then(
      this.props.navigation.replace('MainTab', { screen: 'Home' })
    )
  }


  render() {
    return (
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        >
        <View style={styles.otherContainer}>
          <Text style={styles.promptText}>{Strings.usernameText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterUsernameText}
              onChangeText={this.handleUsername}
              />
          </View>

          <Text style={styles.promptText}>{Strings.ageText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterAgeText}
              onChangeText={this.handleAge}
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

          <Text style={styles.promptText}>{Strings.jobTitleText}</Text>
          <View style={styles.inputContainer}>
            <TextInput 
              style={styles.smallInputBox} 
              placeholder={Strings.enterJobTitleText}
              onChangeText={this.handleJob}
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

          <View style={styles.fillerContainer} />

          <View style = {styles.buttonContainer}>
            <LargeButton 
              title="Submit"
              buttonColor="g"
              onPress={this.handleSubmit}
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