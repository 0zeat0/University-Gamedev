import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from "./Button";
import Icon from "./Icon";

import {RigthIcon} from '../../assets/Icons';

class Link extends Component {
  render(){


    return (
        <Button parentStyle={styles.button} onPress={this.props.href}>
            <Icon fill={this.props.color || "#fff"} svg={this.props.icon} background={this.props.background|| "#ccc"} width={vw(12)} height={vw(12)} radius={vw(2)} padding={vh(1.5)}  />
            <View style={styles.textContainer}>
              <Text style={styles.text}>{this.props.text}</Text>
            </View>
            <Icon fill="#d4d0d0" svg={RigthIcon()} width={vw(12)} height={vw(12)} padding={vh(2)}/>
        </Button>
    );
  }
}

const styles = StyleSheet.create({
    button: {
      width: "100%",
      backgroundColor: "#f6f6f6",
      borderRadius: vw(3),
      padding: vh(2.5),
      margin: vh(0.6),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
    },
    textContainer: {
      flex: 1
    },
    text: {
      fontSize: vw(7),
      marginLeft: vw(6),
      color: "#4b4b4b",
      fontFamily: "NotoSansJP-Regular",
      lineHeight: vh(6),
      letterSpacing: vw(-0.2)
    }
});


export default Link;

