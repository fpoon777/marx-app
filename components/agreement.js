import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native';
import { Colors } from '../styles/index';
import { Dimensions } from 'react-native';
import LargeButton from '../gadgets/large_button';
import * as Strings from '../gadgets/strings';

const { width, height } = Dimensions.get("screen");

class Agreement extends Component {
  render() {
    return (
      <ScrollView 
        contentContainerStyle={styles.largeContainer}
        showsVerticalScrollIndicator={false}
        >
          <View style={styles.container}>
            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>{Strings.agreementTitle}</Text>
            </View>

            <View style={styles.agreementContainer}>
              <Text style={styles.agreementText}>{Strings.agreementText}</Text>
            </View>
            <View style={styles.separatorStyle}></View>
            <View style={styles.buttonContainer}>
              <LargeButton
                title="Get Started"
                buttonColor="w"
                onPress={() => this.props.navigation.replace(
                  'About you (Page 1)')}
              />
            </View>
          </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  largeContainer:{
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.primaryGreen.color,
    justifyContent:'flex-start',
  },
  titleContainer:{
    marginTop: height/9,
    marginLeft: 20,
  },
  titleText:{
    fontWeight: 'bold',
    color: 'white',
    fontSize: 27,
  },
  agreementText:{
    color: 'white',
    fontSize: 22,
  },
  agreementContainer:{
    marginTop: 20,
    marginLeft: width/6,
    marginRight: width/8,
    flexWrap:'nowrap',
    // height: height/1.8,
    // height: "100%",
  },
  separatorStyle:{
    height: height/13
  },
  buttonContainer:{
    marginTop: 20,
    marginBottom: 20,
  },
});

export default Agreement;
  