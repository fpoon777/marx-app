import {LinearGradient} from 'expo-linear-gradient';
import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");

// https://github.com/react-native-linear-gradient/react-native-linear-gradient

class FunctionCard extends Component {
    constructor(props) {
        super(props);
        this.cardText = props.cardText;
        this.colors = props.colors;
    }
    render() {
        return (
            <View style={styles.container}>
                <LinearGradient colors={this.colors} style={styles.linearGradient}>
                <Text style={styles.buttonText}>
                    {this.cardText}
                </Text>
                </LinearGradient>
            </View>

        )
    }
}

// Later on in your styles..
var styles = StyleSheet.create({
    container:{
        width: width/1.1,
        height: height/6,
        marginVertical: 10,
    },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    fontSize: 28,
    textAlign: 'center',
    textAlignVertical:'center',
    fontWeight:'bold',
    marginTop: height/18,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

export default FunctionCard;