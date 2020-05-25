import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
} from 'react-native';


import {connect} from "react-redux";

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from "./Button";

class KanjiTestAnswer extends Component {
  render(){


    let color = "";

    if(this.props.ShouldShowAnswer==true){
      if(this.props.isCorect==true){
        color = "#d9f0f0";
      } else {
        color = "#f0d9d9";
      }
    } else {
      color = "#f6f6f6";
    }

    const styles = StyleSheet.create({
      button: {
        width: "100%",
        backgroundColor: color,
        borderRadius: vw(2),
        padding: vh(1.2),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
      },
      textEng: {
        fontSize: vw(6.5),
        color: "#4b4b4b",
        fontFamily: "NotoSansJP-Regular",
        lineHeight: vh(5.5),
        letterSpacing: vw(-0.2)
      },
      textJap: {
        fontSize: vw(6.5),
        color: "#4b4b4b",
        fontFamily: "NotoSerifJP-Regular",
        lineHeight: vh(5.5),
        letterSpacing: vw(-0.2)
      },
  
  });


    if(this.props.type=="eng"){
      return (
        <Button parentStyle={styles.button} onPress={this.props.onPress}>
          <Text style={this.props.test=="Meaning"?styles.textEng:styles.textJap}>{this.props.text}</Text>
        </Button>
      );
    }else if(this.props.type=="jap"){
      return (
        <Button parentStyle={styles.button} onPress={this.props.onPress}>
          <Text style={styles.textJap}>{this.props.text}</Text>
        </Button>
      );
    }
  }
}


const mapStateToProps = (state) => {
  return {
    ShouldShowAnswer: state.ReadingTest.ShouldShowAnswer
  };
};



export default connect(mapStateToProps)(KanjiTestAnswer);



