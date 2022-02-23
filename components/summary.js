import React, { Component } from 'react';
import { StyleSheet, View, Text, FlatList, ProgressBarAndroidComponent} from 'react-native';
import { Colors } from '../styles/index';
import { Dimensions } from 'react-native';
import SummaryList from '../gadgets/summary_list';
import LargeButton from '../gadgets/large_button';
import * as Strings from '../gadgets/strings';
import {trackCalculateClicked} from '../gadgets/google_analytics_util';


const { width, height } = Dimensions.get("screen");

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      dispenseQty:0,
      calculated: false,
    };
    this.inputs = {
      dailyUnit: this.props.route.params.dailyUnit,
      deviceType: this.props.route.params.deviceType,
      penSize: this.props.route.params.penSize,
      strength: this.props.route.params.strength,
      productType: this.props.route.params.productType,
      daySupply: this.props.route.params.daySupply,
    }
    this.summaryData={
      units: this.props.route.params.dailyUnit,
      days: this.props.route.params.daySupply,
      type: this.props.route.params.deviceType,
      detail: this.props.route.params.productType
    }
    this.handleButton = this.handleButton.bind(this);
    this.handleDone = this.handleDone.bind(this);
  }

  handleButton = () =>{
    if(this.state.calculated == false){
      let totalUnits = this.inputs.dailyUnit * this.inputs.daySupply;
      let qty = 0;
      if(this.inputs.deviceType=='Vials'){
        qty=Math.floor(totalUnits / (10 * 100));
      }
      else{
        qty = Math.floor(totalUnits / (this.inputs.penSize * this.inputs.strength));
      }
      this.setState({'dispenseQty': qty});
      this.setState({'calculated': true});
      trackCalculateClicked();
    }
  }

  handleDone = () => {
    this.props.navigation.popToTop()
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{Strings.overviewText}</Text>
          </View>
          <View style={styles.contentContainer}>
            <SummaryList summaryData={this.summaryData}/>
          </View>

          <View style={styles.buttonContainer}>
            {this.state.calculated === false ? 
            <LargeButton 
                onPress={this.handleButton}
                title={"Calculate"} 
                buttonColor='g'/> : 
            <LargeButton 
              onPress={this.handleDone}
              title={"Done"} 
              buttonColor='g'/>
            }
          </View>

          <View style={styles.resultContainer}>
            <Text
              style={
                this.state.calculated === false ? styles.hideStyle: styles.resultTextStyle
              }
            >Dispense Quantity: {this.state.dispenseQty}</Text>
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
    justifyContent:'center',
  },
  subContainer:{
    backgroundColor:'white',
    borderRadius: 40,
    height: height/1.6,
    marginTop: height/5,
    width: width,
    marginBottom: height/4,
    justifyContent:'flex-start',
  },
  contentContainer:{
    marginHorizontal: 20,
    alignItems:'center',
    paddingBottom: height*0.02
  },
  titleContainer:{
    marginTop: height*0.03,
    marginLeft: 20,
  },
  titleText:{
    fontWeight: 'bold',
    fontSize: height*0.034,
  },
  buttonContainer:{
    alignItems:'center',
    paddingTop: height*0.30
  },
  resultContainer:{
    alignSelf:'center',
    paddingTop: height*0.02
  },
  hideStyle:{
    opacity:0,
  },
  resultTextStyle:{
    fontWeight:'bold',
    color: 'black',
    marginTop: 20,
    fontSize: height*0.03, 
  },
  buttonContainerHide:{
    opacity: 0
  },
});

export default Summary;
  