import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';



import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from '../components/Button';
import Icon from '../components/Icon';


class RoundButton extends Component {
  render(){
    return (
      <Button
        parentStyle={styles.RoundButton}
        onPress={this.props.onPress}
        >
         <Icon fill={this.props.fill} svg={this.props.icon} width={vw(15)} height={vw(15)} padding={vh(2.8)}/>
      </Button>
    );
  }
}

const styles = StyleSheet.create({
RoundButton: {
    width: vw(16),
    height: vw(16),
    borderRadius: vw(100),
    backgroundColor: "#f6f6f6",
    margin: vw(1),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
}
});



export default RoundButton;

