import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../styles/index';
import { Dimensions } from 'react-native';
import SummaryList from '../gadgets/summary_list';
import LargeButton from '../gadgets/large_button';
import * as Strings from '../gadgets/strings';
import {trackCalculateClicked, trackInsulinData} from '../gadgets/google_analytics_util';

import { vialData, penData, allProducts } from '../assets/data';

const { width, height } = Dimensions.get("screen");

class Summary extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      dispenseQty:0,
      calculated: false,
      totalUnits: 0,
    };
    this.inputs = {
      dailyUnit: this.props.route.params.dailyUnit,
      deviceType: this.props.route.params.deviceType,
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
      let product = allProducts.find(product => product.label == this.inputs.productType);
      let strength = product.strength;
      let productSize = product.size;
      
      qty=Math.ceil(totalUnits / (strength * productSize));

      this.setState({"totalUnits": totalUnits})
      this.setState({'dispenseQty': qty});
      this.setState({'calculated': true});

      const dataObject = {
        dailyUnit: this.inputs.dailyUnit,
        deviceType: this.inputs.deviceType,
        strength: strength,
        productType: this.inputs.productType,
        productSize: productSize,
        daySupply: this.inputs.daySupply,
        dispenseQty: this.state.dispenseQty
      };
      
      trackInsulinData(dataObject);
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
            >Calculated Supply: {this.state.totalUnits} units</Text>
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
    height: height/1.45,
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
    marginTop: 10,
    fontSize: height*0.03, 
  },
  buttonContainerHide:{
    opacity: 0
  },
});

export default Summary;
  