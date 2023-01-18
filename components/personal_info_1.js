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


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//update onetime storage
import AsyncStorage from '@react-native-async-storage/async-storage';

class PersonalInfo1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: "",
      yearInTitle: "",
      difficulty: "",
      timeToPrescribe: "",
    };
    this.demoData = this.props.route.params.dataObject;
    this.handleJob = this.handleJob.bind(this);
    this.handleTimeToPrescribe = this.handleTimeToPrescribe.bind(this);
    this.handleDifficulty = this.handleDifficulty.bind(this);
    this.handleYearIntitle = this.handleYearIntitle.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.storeData = this.storeData.bind(this);
  }

  handleJob = (e) => {
    this.setState({job: e});
  }

  handleTimeToPrescribe = (e) => {
    this.setState({timeToPrescribe: e});
  }

  handleDifficulty = (e) => {
    this.setState({difficulty: e});
  }

  handleYearIntitle = (e) => {
    this.setState({yearInTitle: e});
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
    if(this.state.job === ""
      || this.state.difficulty === ""
      || this.state.timeToPrescribe === ""
      || this.state.yearInTitle === ""
      ){
      alert("Please enter all required fields");
    }
    else if(isNaN(this.state.yearInTitle)){
      alert ("Please enter a valid year working in title");
    }
    else if(isNaN(this.state.timeToPrescribe) || this.state.timeToPrescribe < 0){
      alert ("Please enter a valid time in minutes to prescribe");
    }
    else{
      const dataObject = {
        username: this.demoData.username,
        age: this.demoData.age,
        gender: this.demoData.gender,
        race: this.demoData.race,
        state: this.demoData.state,
        education: this.demoData.education,
        year: this.demoData.year,
        employer: this.demoData.employer,
        email: this.demoData.email,
        job: this.state.job,
        difficulty: this.state.difficulty,
        timeToPrescribe: this.state.timeToPrescribe,
        yearInTitle: this.state.yearInTitle,
      }

      storePersonalInfo(dataObject);
      this.props.navigation.popToTop();
      this.props.navigation.replace('MainTab', { screen: 'Home' });
      this.storeData();
    }
  }


  render() {
    return (
      <KeyboardAwareScrollView>
      <ScrollView 
        style={styles.container}
        showsVerticalScrollIndicator={false}
        >
          <Text style={styles.promptText}>{Strings.jobTitleText}</Text>
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
              keyboardType='numeric'
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
              keyboardType='numeric'
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

export default PersonalInfo1;