import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import SquareButton from '../components/SquareButton';
import AppContainer from '../components/AppContainer';


class TestResults extends Component {
  render(){


    let nofq = this.props.numberOfQuestions;
    let aq = this.props.answeredQuestions-1;
    let ca = this.props.corectAnswers;
    let wa = this.props.wrongAnswers;
    let a;
    if(this.props.corectAnswers==0){
      a = 0;
    }
    if(this.props.corectAnswers>0){
      a = (this.props.corectAnswers/aq*100).toFixed(1);
    }
    let ts = this.props.time;
    let minutes = 0;
    let seconds = ts;
    let time = seconds+" s";
    if(ts>60){
       minutes = Math.floor(ts/60);
       seconds = ts - (minutes*60);
       time = minutes+" min "+seconds+" s";
    }
    
    let art = (this.props.responseTimeSum/(this.props.answeredQuestions-1)).toFixed(2);
    if(this.props.answeredQuestions-1==0){
      art = 0;
    }



    return (
      <AppContainer>
        <View style={styles.Result}>
          <Text style={styles.HeaderText}>Your result:</Text>
          <View style={styles.ResultItems}>
            <View style={styles.Item}><Text style={styles.ItemText}>{"Number of questions: "+nofq}</Text></View>
            <View style={styles.Item}><Text style={styles.ItemText}>{"Answered questions: "+aq}</Text></View>
            <View style={styles.Item}><Text style={styles.ItemText}>{"Corect answers: "+ca}</Text></View>
            <View style={styles.Item}><Text style={styles.ItemText}>{"Wrong answers: "+wa}</Text></View>
            <View style={styles.Item}><Text style={styles.ItemText}>{"Accuracy: "+a+"%"}</Text></View>
            <View style={styles.Item}><Text style={styles.ItemText}>{"Time spent: "+time}</Text></View>
            <View style={styles.Item}><Text style={styles.ItemText}>{"Average response time: "+art+" s"}</Text></View>
          </View>
        </View>
        <View style={styles.SquareButtonsList}>
          <SquareButton shouldFlex={1} text="FINISH" onPress={()=>{
            Actions.popTo(this.props.sceneToPop);
          }} />
          <SquareButton shouldFlex={1} text="REPEAT" onPress={()=>{
             Actions.pop();
             this.props.restart();
          }} />
        </View>
      </AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  Result: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center"
  },
  ResultItems: {
    width: "85%",
    flexDirection: "column",
    alignItems: "center",
    margin: vw(4)
  },
  Item: {
    width: "100%",
    backgroundColor: "#f6f6f6",
    borderRadius: vw(100),
    padding: vh(1),
    marginTop: vh(0.5),
    marginBottom: vh(0.5)
  },
  ItemText: {
    fontSize: vw(5),
    marginLeft: vw(4),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(5),
    letterSpacing: vw(-0.2)
  },
  HeaderText: {
    fontSize: vw(8),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(8),
    letterSpacing: vw(0.4)
  },
  SquareButtonsList: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
});



export default TestResults;

