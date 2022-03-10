import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

class AdaInfo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  paragraph:{
    flex:1,
    marginTop: 30,
    marginHorizontal: 20,
  }
});

export default AdaInfo;