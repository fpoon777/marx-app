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
  constructor(props) {
    super(props);

    this.state = { 
      dispenseQty:0,
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
  }

  handleButton = () =>{
    if(this.state.dispenseQty == 0){
      let totalUnits = this.inputs.dailyUnit * this.inputs.daySupply;
      let qty = 0;
      if(this.inputs.deviceType=='Vials'){
        qty=Math.floor(totalUnits / (10 * 100));
      }
      else{
        qty = Math.floor(totalUnits / (this.inputs.penSize * this,inputs.strength));
      }
      this.setState({'dispenseQty': qty});
    }
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
            <LargeButton 
                onPress={this.handleButton}
                title={"Calculate"} 
                buttonColor='g'/>
          </View>

          <Text
            style={
              this.state.qty === 0 ? styles.hideStyle: styles.showStyle
            } 
          > Dispense Quantity: {this.state.dispenseQty}</Text>

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
  resultContainer:{
    marginTop: height/7,
    backgroundColor: 'black',
    marginBottom: height/9,
    height: height/7,
  },
  showStyle:{
    color: 'black'
  },
  hideStyle:{
    opacity:0,
  }
});

export default Summary;
  