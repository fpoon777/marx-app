import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Buttons, Colors } from '../styles/index';

//https://blog.logrocket.com/create-radio-buttons-react-native/

export default function RadioButton({ data, onSelect, number }) {
    return (
        <View style={styles.container}>
        {data.map((item) => {
            return (
                <Pressable style={
                    number === '2' ? styles.twoButton: styles.fourButton
                    } key={item.value} >
                    <Text style={styles.textStyle}>{item.value}</Text>
                </Pressable>
            );
        })}
        </View>
    );
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
    twoButton: {
        ...Buttons.largeButton,
        elevation:0,
        textAlign:'center',
        backgroundColor: Colors.themeGrey.color,
        width: Buttons.largeButton.width/1.15
    },
    fourButton: {
        ...Buttons.largeButton,
        elevation:0,
        textAlign:'center',
        backgroundColor: Colors.themeGrey.color,
        width: Buttons.largeButton.width/1.8
    },
    textStyle:{
        color: 'grey',
        textAlign: 'center'
    },
    unselected: {
        backgroundColor: Colors.outlineColor,
        margin: 5,
    },
    selected: {
        backgroundColor: Colors.primaryGreen,
    },
});