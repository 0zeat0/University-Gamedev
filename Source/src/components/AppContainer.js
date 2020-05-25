import React, {Component} from 'react';
import {
  StyleSheet,
  View
} from 'react-native';



import {vw} from "../utilities/Responsiveness";


class AppContainer extends Component {
  render(){
    return (
      <View
        style={styles.AppContainer}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: vw(7),
    borderTopRightRadius: vw(7)
  }
});



export default AppContainer;

