import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";


class TestStatusBar extends Component {
  render(){

    let questionStatus = this.props.currentQuestion+"/"+this.props.numberOfQuestions;
    let timeStatus = this.props.time.toFixed(1)+"/10";


    return (
      <View style={styles.TestStatus}>
        <Text style={styles.TestStatusText}>{questionStatus}</Text>
        <Text style={styles.TestStatusText}>{timeStatus}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  TestStatus: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: vw(4)
  },
  TestStatusText: {
    fontSize: vw(5),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(6),
    letterSpacing: vw(-0.2)
  }
});


export default TestStatusBar;

