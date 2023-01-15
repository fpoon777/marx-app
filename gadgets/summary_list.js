import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import * as Strings from '../gadgets/strings';
import { Colors } from '../styles/index';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");

//https://reactnative.dev/docs/using-a-listview

const SummaryList = ({summaryData}) => {
    return (
        <View style={styles.container}>
        <View style={styles.item}>
            <Text style={styles.leftText}>{Strings.totalDailyUnitsText}</Text>
            <Text style={styles.rightText}>{summaryData.units} units</Text>
        </View>

        <Separator />
        <View style={styles.item}>
            <Text style={styles.leftText}>{Strings.daySupplyText}</Text>
            <Text style={styles.rightText}>{summaryData.days} days</Text>
        </View>

        <Separator />

        <View style={styles.item}>
            <Text style={styles.leftText}>{Strings.deviceTypeText}</Text>
            <Text style={styles.rightText}>{summaryData.type}</Text>
        </View>

        <Separator />

        <View style={styles.item}>
            <Text style={styles.leftText}>{Strings.productDetailText}</Text>
            {/* <Text style={styles.rightText}>{summaryData.detail}</Text> */}
        </View>

        <View style={styles.productTextContainer}>
            <Text style={styles.productTextStyle}>{summaryData.detail}</Text>
        </View>

        <Separator />
        
        </View>
    );
}


const Separator = () => {
    return(
        <View
            style={{
                borderBottomColor: Colors.themeGrey.color,
                borderBottomWidth: 2,
                marginTop: 3,
                marginBottom:3,
                marginLeft: 8,
                marginRight:8,
            }}
        />
    )
}

const styles = StyleSheet.create({
container: {
    // flex: 1,
    paddingTop: height*0.003,
    alignSelf:'center',
    width: width/1.1,
    height: height/20,
},
item: {
    padding: height*0.004,
    height: height*0.05,
    // width: width/1.2,
    justifyContent:'space-between',
    flexDirection:'row'
},
leftText:{
    color: Colors.themeGrey.color,
    fontSize: height*0.024,
    fontWeight: 'bold',
    // flex:1,
    // alignSelf:'flex-start'
    textAlign:'left',
},
rightText:{
    color: 'black',
    fontSize: height*0.026,
    fontWeight: 'bold',
    textAlign:'right'
},
productTextContainer:{
    padding: height*0.004,
    height: height*0.05,
    justifyContent:'flex-end',
    flexDirection:'row'
},
productTextStyle:{
    color: 'black',
    fontSize: height*0.026,
    fontWeight: 'bold',
    textAlign:'right',
    alignSelf: 'flex-end',
}
});

export default SummaryList;