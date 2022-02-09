import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");

//https://www.npmjs.com/package/react-native-element-dropdown

 
// const DropDownMenu = (props) => {

//   const {dataList, placeholderText, onSelect} = props;

//   const renderItem = (data) => {data.map((item) => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.textItem}>{item.label}</Text>
//       </View>
//     );
//   })};

//   return (
//     <Dropdown
//       style={styles.dropdown}
//       placeholderStyle={styles.placeholderStyle}
//       selectedTextStyle={styles.selectedTextStyle}
//       inputSearchStyle={styles.inputSearchStyle}
//       data={dataList}
//       search
//       maxHeight={300}
//       labelField="label"
//       valueField="value"
//       placeholder="Select a Product"
//       searchPlaceholder="Search..."
//       // value={value}
//       onChange={item =>{
//         onSelect(item.label);
//         // alert("placeholder text is ", placeholderText.selectProductText);
//       }}
//       renderItem={renderItem(dataList)}
//     />
//   );
// };


class DropDownMenu extends Component {
  constructor(props) {
      super(props);
  
      this.state = { 
        selectedButton: -1,
        // value: props.value
      };
      this.dataList = props.dataList;
      this.onSelect = props.onSelect;
      this.placeholderText = props.placeholderText;
      this.renderItem = this.renderItem.bind(this);
      this.handleReset = this.handleReset.bind(this);
      // this.changeSelected = this.changeSelected.bind(this);
      // this.handleButtonStyle = this.handleButtonStyle.bind(this);
  }

  renderItem = (data) => {data.map((item) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
      </View>
    );
  })};

  handleReset = ()=>{
    this.setState({selectedButton: -1});
  }

  render() {
    return  (
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        data={this.dataList}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        searchPlaceholder="Search..."
        // value={value}
        onChange={item =>{
          this.onSelect(item.label);
        }}
        renderItem={this.renderItem(this.dataList)}
      />
      );
    }
}


export default DropDownMenu;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: height/14,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    width: width/1.3,
    elevation: 2,
  },
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});