import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList} from 'react-native';
import { Colors } from '../styles/index';
import { Dimensions } from 'react-native';
import SummaryList from '../gadgets/summary_list';
import LargeButton from '../gadgets/large_button';
import * as Strings from '../gadgets/strings';


const { width, height } = Dimensions.get("screen");

const testData = 
{
    units: 50,
    days: 30,
    type: 'Vial',
    detail: 'Novolin 10ml U100'
}


class Summary extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{Strings.overviewText}</Text>
            </View>
            <View style={styles.contentContainer}>
              <SummaryList summaryData={testData}/>
            </View>

            <View style={styles.buttonContainer}>
              <LargeButton 
                  title={"Calculate"} 
                  buttonColor='g'/>
            </View>

          </View>
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
});

export default Summary;
  