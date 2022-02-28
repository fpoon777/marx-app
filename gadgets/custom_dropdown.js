// import DropDownPicker from "react-native-custom-dropdown";
// import React, { Component } from 'react';
// import { StyleSheet, View, Text } from 'react-native';
// import { Dimensions } from 'react-native';
// const { width, height } = Dimensions.get("screen");

// //https://www.npmjs.com/package/react-native-custom-dropdown


// class CustomDropdown extends Component {
//   constructor(props) {
//       super(props);
  
//       this.state = { 
//         selectedButton: -1,
//         selectedItem: null,
//       };
//       this.dataList = props.dataList;
//       this.onSelect = props.onSelect;
//       this.placeholderText = props.placeholderText;
//       this.renderItem = this.renderItem.bind(this);
//       this.handleReset = this.handleReset.bind(this);
//       this.handleSelect = this.handleSelect.bind(this);

//       this.controller;
//   }

//   renderItem = (data) => {data.map((item) => {
//     return (
//       <View style={styles.item}>
//         <Text style={styles.textItem}>{item.label}</Text>
//       </View>
//     );
//   })};

//   handleSelect = (key, label) => {
//     this.setState({selectedItem: label});
//     this.setState({selectedButton: key});
//   }

//   handleReset = ()=>{
//     this.handleSelect({
//         selectedButton: -1,
//         selectedItem: null,
//     })
//     alert("reset called")
//   }

//   render() {
//     return  (
//         <DropDownPicker
//             value={this.state.selectedButton}
//             containerStyle={{width: 150, height: 70}}
//             style={{padding: 12}}
//             dropDownStyle={{backgroundColor: 'white'}}
//             items={this.dataList}  
//             placeholder={this.placeholderText}      
//             containerStyle={{height: 40}}
//             itemStyle={{
//                 justifyContent: 'flex-start'
//             }}
//             onChangeItem={item => {
//                 this.handleSelect(item.key, item.label);
//                 this.onSelect(item.label);
//             }}

//             searchable={true}
//             searchablePlaceholder="Search..."
//             searchablePlaceholderTextColor="gray"
//             showArrow={this.props.testVal}
//             controller={instance => this.controller = instance}
//         />
//     //   <Dropdown
//     //     style={styles.dropdown}
//     //     inputSearchStyle={styles.inputSearchStyle}
//     //     data={this.dataList}
//     //     search
//     //     maxHeight={300}
//     //     labelField="label"
//     //     placeholder={this.placeholderText}
//     //     searchPlaceholder="Search..."
//     //     value={this.state.selectedButton == -1? 
//     //       null : 
//     //       this.dataList[this.state.selectedButton]}
//     //     onChange={item =>{
//     //       this.handleSelect(item.key);
//     //       this.onSelect(item.label);
//     //     }}
//     //     renderItem={this.renderItem(this.dataList)}
//     //     controller={instance => this.controller = instance}
//     //   />
//       );
//     }
// }


// export default CustomDropdown;

// const styles = StyleSheet.create({
//   dropdown: {
//     margin: 16,
//     height: height/12,
//     backgroundColor: 'white',
//     borderRadius: 12,
//     padding: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     width: width/1.3,
//     elevation: 2,
//   },
//   container: {
//     margin: 16,
//     height: height/12,
//     borderRadius: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 1,
//     },
//     shadowOpacity: 0.2,
//     shadowRadius: 1.41,
//     width: width/1.3,
//     elevation: 2,
//   },
//   item: {
//     padding: 17,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   textItem: {
//     flex: 1,
//     fontSize: 16,
//   },
//   placeholderStyle: {
//     fontSize: 16,
//   },
//   selectedTextStyle: {
//     fontSize: 16,
//   },
//   inputSearchStyle: {
//     height: 40,
//     fontSize: 16,
//   },
// });