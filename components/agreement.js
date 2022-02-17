import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { Colors } from '../styles/index';
import { Dimensions } from 'react-native';
import LargeButton from '../gadgets/large_button';
import * as Strings from '../gadgets/strings';


const { width, height } = Dimensions.get("screen");

class Agreement extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{Strings.agreementTitle}</Text>
          </View>

          <View>
            <Text style={styles.titleText}>{Strings.agreementText}</Text>
          </View>

        </View>

        <LargeButton
            title="Get Started"
            buttonColor="w"
            
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.primaryGreen.color,
    justifyContent:'center'
  },
  subContainer:{
    backgroundColor:'white',
    borderRadius: 40,
    height: height/1.6,
    marginTop: height/5,
    width: width,
    marginBottom: height/4,
    justifyContent:'flex-start'
  },
  contentContainer:{
    marginHorizontal: 20,
    alignItems:'center',
    // flex: 1,
  },
  titleContainer:{
    marginTop: 30,
    marginLeft: 20,
    // flex: 4,
  },
  titleText:{
    fontWeight: 'bold',
    fontSize: 23,
  },
  buttonContainer:{
    marginTop: height/3,
    alignItems:'center',
    // flex: 2,
  },
  resultContainer:{
    marginTop: height/7,
    backgroundColor: 'black',
    marginBottom: height/9,
    height: height/7,
  },
  hideStyle:{
    opacity:0,
  },
  resultContainer:{
    alignSelf:'center'
  },
  resultTextStyle:{
    fontWeight:'bold',
    color: 'black',
    marginTop: 20,
    fontSize: 23, 
  },
  buttonContainerHide:{
    opacity: 0
  }

});

export default Agreement;
  