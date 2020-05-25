import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";


class KanjiTestQuestion extends Component {
  render(){

    let question = [];


    if(this.props.item.onYomi && this.props.test!="Meaning"){

    this.props.item.onYomi =  this.props.item.onYomi.slice(0, 2);

    this.props.item.onYomi.forEach((item, index) => {
      if(index!=this.props.item.onYomi.length-1){
        question.push(
          <View key={item+index} style={styles.QuestionItem}>
              <Text style={styles.JapTextSmall}>{item +", "}</Text>
          </View>
        );
      } else {
        question.push(
          <View key={item+index} style={styles.QuestionItem}>
              <Text style={styles.JapTextSmall}>{item}</Text>
          </View>
        );
      }
    });


    if( this.props.item.kunYomi.length>0){
      question.push(
        <View key={"item"+";"} style={styles.QuestionItem}>
            <Text style={styles.JapTextSmall}>{"; "}</Text>
        </View>
      );
    }

    let kuns = [];

    this.props.item.kunYomi.forEach(kunYomi => {
      if(!kunYomi.includes("-")){
        if(!kunYomi.includes(".")){
          kuns.push({
            value: kunYomi.replace("-",""),
            optional: null
          });
        }
        if(kunYomi.includes(".")){
        let kunParts =  kunYomi.split(".");
        let found = kuns.findIndex(element => element.value == kunParts[0]);
        if(found!=-1){
          kuns[found].optional = kunParts[1];
        }else{
          kuns.push({
            value: kunParts[0],
            optional: kunParts[1]
          });
        }
        }
      }
    });

    kuns = kuns.slice(0, 2);

    kuns.forEach((item, index) => {
      if(index!=kuns.length-1){
        question.push(
          <View key={item.value+index} style={styles.QuestionItem}>
              <Text style={styles.JapTextSmall}>{item.value + (item.optional?item.optional:"")  +", "}</Text>
          </View>
        );
      } else {
        question.push(
          <View key={item.value+index} style={styles.QuestionItem}>
              <Text style={styles.JapTextSmall}>{item.value + (item.optional?item.optional:"")}</Text>
          </View>
        );
      }
    });


  } else if(this.props.item.meaning && this.props.test=="Meaning"){

    let meanings = this.props.item.meaning;

    meanings =  meanings.slice(0, 2);

    meanings.forEach((item, index) => {
      if(index!=meanings.length-1){
        question.push(
          <View key={item+index} style={styles.QuestionItem}>
                <Text style={styles.EngTextSmall}>{item + ", "}</Text>
          </View>
        );
        } else {
          question.push(
            <View key={item+index} style={styles.QuestionItem}>
                  <Text style={styles.EngTextSmall}>{item}</Text>
            </View>
          );
        }
    });
  }


    if(this.props.answersType=="jap"){
      return (
        <View style={styles.Question}>
          {question}
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
    alignContent: "center",
    justifyContent: "center",
    flexWrap:"wrap",
    marginTop: vw(3),
    padding: vw(4),
    textAlign: "center",
    height: vh(22),
  },
  QuestionItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  JapText: {
    fontSize: vw(25),
    color: "#4b4b4b",
    fontFamily: "NotoSerifJP-Regular",
    lineHeight: vh(20),
    letterSpacing: vw(-0.2),
    textAlign: "center"
  },
  JapTextSmall: {
    fontSize: vw(10),
    color: "#4b4b4b",
    fontFamily: "NotoSerifJP-Regular",
    lineHeight: vh(9),
    letterSpacing: vw(-0.2),
    textAlign: "center"
  },
  EngText: {
    fontSize: vw(25),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(20),
    letterSpacing: vw(-0.2),
    textAlign: "center"
  },
  EngTextSmall: {
    fontSize: vw(10),
    color: "#4b4b4b",
    fontFamily: "NotoSansJP-Regular",
    lineHeight: vh(9),
    letterSpacing: vw(-0.2),
    textAlign: "center"
  }
});


export default KanjiTestQuestion;

