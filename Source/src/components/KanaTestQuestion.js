import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";


class KanaTestQuestion extends Component {
  render(){


    if(this.props.answersType=="jap"){
      return (
        <View style={styles.Question}>
          <Text style={styles.EngText}>{this.props.item.romaji}</Text>
        </View>
      );
    } else {
      return (
        <View style={styles.Question}>
          <Text style={styles.JapText}>{this.props.item.japanese}</Text>
        </View>
      );
    }

  }
}

const styles = StyleSheet.create({
  Question: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: vw(4)
  },
  JapText: {
    fontSize: vw(25),
    color: "#4b4b4b",
    fontFamily: "NotoSerifJP-Regular",
    lineHeight: vh(20),
    letterSpacing: vw(-0.2)
  },
  EngText: {
    fontSize: vw(25),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(20),
    letterSpacing: vw(-0.2)
  }
});


export default KanaTestQuestion;

