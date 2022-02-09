import React, { Component } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Buttons, Colors } from '../styles/index';

//https://blog.logrocket.com/create-radio-buttons-react-native/
//https://www.freecodecamp.org/news/react-changing-state-of-child-component-from-parent-8ab547436271/

class RadioButton extends Component {
    constructor(props) {
        super(props);
    
        this.state = { 
          selectedButton: -1,
          value: props.value
        };
        this.data = props.data;
        this.onSelect = props.onSelect;
        this.number = props.number;
        this.changeSelected = this.changeSelected.bind(this);
        this.handleButtonStyle = this.handleButtonStyle.bind(this);
    }

    //change selected state to rerender
    changeSelected = (e) => {
        this.setState(
          { 
            selectedButton: e,
          }
        )
    }

    //handle button color styles
    handleButtonStyle = (number, index) => {
        if(number === '2'){
            if(this.state.selectedButton == index){
                return styles.twoSelected;
            }
            else{
                return styles.twoUnselected;
            }
        }
        else{
            if(this.state.selectedButton == index){
                return styles.fourSelected;
            }
            else{
                return styles.fourUnselected;
            }
        }
    }

    handleTextStyle=(index)=>{
        if(this.state.selectedButton == index){
            return styles.textSelectedStyle;
        }
        else{
            return styles.textStyle;
        }
    }

    handleReset = ()=>{
        this.setState(
            { 
              selectedButton: -1,
            }
        )
    }

    render() {
    return (
        <View style={styles.container}>
        {this.data.map((item, index) => {
            return (
                <Pressable 
                    onPress={()=> 
                        {
                            this.onSelect(item.value);
                            this.changeSelected(index);
                        }
                    }
                    style={this.handleButtonStyle(this.number, index)} 
                    key={index} >
                    <Text style={this.handleTextStyle(index)}>{item.value}</Text>
                </Pressable>
            );
        })}
        </View>
    );
}
}

const styles = StyleSheet.create({
    container: {
        // justifyContent: 'space-between',
        justifyContent: 'center',
        flex:1,
        flexDirection: 'row',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    textStyle:{
        color: 'grey',
        textAlign: 'center'
    },
    textSelectedStyle:{
        color: 'white',
        textAlign: 'center',
        fontWeight:'bold'
    },
    twoSelected:{
        ...Buttons.largeButton,
        elevation:0,
        textAlign:'center',
        backgroundColor: Colors.primaryGreen.color,
        width: Buttons.largeButton.width/1.15,
        color:'white'
    },
    twoUnselected:{
        ...Buttons.largeButton,
        elevation:0,
        textAlign:'center',
        backgroundColor: Colors.themeGrey.color,
        width: Buttons.largeButton.width/1.15,
    },
    fourSelected:{
        ...Buttons.largeButton,
        elevation:0,
        textAlign:'center',
        backgroundColor: Colors.primaryGreen.color,
        width: Buttons.largeButton.width/1.8,
        color:'white'
    },
    fourUnselected:{
        ...Buttons.largeButton,
        elevation:0,
        textAlign:'center',
        backgroundColor: Colors.themeGrey.color,
        width: Buttons.largeButton.width/1.8
    }
});

export default RadioButton;