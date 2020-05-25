import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";

import Button from './Button';


class KanjiSetItem extends Component {

  
  render(){


    let english = this.props.data.meaning[0];

    let onYomi = [];
    let kunYomi =  [];
    let onYomiComponent = [];
    let kunYomiComponent = [];

    if(this.props.data){

    this.props.data.onYomi.forEach((reading, index) => {
      if(index<1){
        onYomi.push(reading);
      }
    });
 

    this.props.data.kunYomi.forEach((reading, index) => {
        if(!reading.includes("-")){
          
          if(!reading.includes(".")){
            kunYomi.push({
              value: reading,
              optional: null
            });
          }

          if(reading.includes(".")){

            let readings =  reading.split(".");

            let found = kunYomi.findIndex(element => element.value == readings[0]);
            
            if(found!=-1){
              kunYomi[found].optional = readings[1];
            }else{
              kunYomi.push({
                value: readings[0],
                optional: readings[1]
              });
            }
          }
        }
    });

 
 
    onYomi.forEach((reading, index) => {
      if(index<1){
        if(index!=onYomi.length-1){
          onYomiComponent.push(
            <Text key={reading+index} style={styles.japanese}>{reading+", "}</Text>
          );
        }else{
          onYomiComponent.push(
            <Text key={reading+index} style={styles.japanese}>{reading}</Text>
          );
        }
      }
    });



    kunYomi.forEach((reading, index) => {
      if(index<1){
        if(index!=0){
          if(reading.optional!=null){
            kunYomiComponent.push(
              <Text key={reading.value+index} style={styles.japanese}>{reading.value}</Text>
            );
            kunYomiComponent.push(
              <Text key={reading.optional+index} style={styles.japaneseOptional}>{reading.optional+", "}</Text>
            );
          }else{
            kunYomiComponent.push(
              <Text key={reading.value+index} style={styles.japanese}>{reading.value+", "}</Text>
            );
          }
         
        }else{
          if(reading.optional!=null){
            kunYomiComponent.push(
              <Text key={reading.value+index} style={styles.japanese}>{reading.value}</Text>
            );
            kunYomiComponent.push(
              <Text key={reading.optional+index} style={styles.japaneseOptional}>{reading.optional}</Text>
            );
          }else{
            kunYomiComponent.push(
              <Text key={reading.value+index} style={styles.japanese}>{reading.value}</Text>
            );
          }
        }
      }
    });

  }
 

      return (
        <Button parentStyle={styles.item} onPress={this.props.onPress}>
          <Text style={styles.kanji}>{this.props.data.japanese}</Text>
            <View style={styles.mid}>
              <View style={styles.japaneseView}>
                {onYomiComponent}
                  {kunYomiComponent.length>0?<Text style={styles.japanese}>{";  "}</Text>:null}
                {kunYomiComponent}
              </View>
              <Text style={styles.english}>{english}</Text>
            </View>
          <Text style={styles.index}>{this.props.index}</Text>
        </Button>
      );
  }

}

const styles = StyleSheet.create({
    item: {
        width: "100%",
        height: vh(15),
        backgroundColor: "#f6f6f6",
        borderRadius: vw(2),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignContent: "center",
        padding: vw(3),
        marginTop: vw(1),
        marginBottom: vw(1),
    },
    japaneseView: {
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
      alignContent: "center",
      flex:1
  },
    kanji: {
      fontSize: vw(10),
      color: "#4b4b4b",
      fontFamily: "NotoSerifJP-Regular",
      lineHeight: vh(9),
      letterSpacing: vw(-0.2)
    },
    index: {
      fontSize: vw(6),
      color: "#a3a3a3",
      fontFamily: "NotoSansJP-Regular",
      lineHeight: vh(5),
      letterSpacing: vw(-0.2),
    },
    mid: {
      flexDirection: "column",
      justifyContent: "space-evenly",
      alignItems: "center",
      flex:1,
      marginLeft: vw(2),
      marginRight: vw(2),
    },
    japanese: {
        fontSize: vw(6),
        color: "#4b4b4b",
        fontFamily: "NotoSerifJP-Regular",
        lineHeight: vh(5),
        letterSpacing: vw(-0.2),
    },
    japaneseOptional: {
      fontSize: vw(6),
      color: "#979797",
      fontFamily: "NotoSerifJP-Regular",
      lineHeight: vh(5),
      letterSpacing: vw(-0.2),
  },
    english: {
        fontSize: vw(6),
        color: "#4b4b4b",
        fontFamily: "NotoSansJP-Regular",
        lineHeight: vh(5),
        letterSpacing: vw(-0.2),
        flex:1
    }
  });

export default KanjiSetItem;

