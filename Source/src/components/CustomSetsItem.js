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

import {DeleteIcon, AddIcon, RemoveIcon} from '../../assets/Icons';

class CustomSetsItem extends Component {
  render(){

    let hasItem = false;
    let EditFunc = this.props.remove;
    let icon=DeleteIcon();
    let fill="#df7979";

    if(this.props.set){
      if(this.props.unicode!=undefined && this.props.set.includes(this.props.unicode)){
        hasItem = true;
      } 
    }

    EditFunc = (hasItem == true?this.props.remove:this.props.add)

    if(this.props.shouldEdit){
        if(hasItem){
          icon=RemoveIcon()
        } else{
          icon=AddIcon()
        }
    }else{
      icon=DeleteIcon()
    }

    
    if(this.props.shouldEdit){
        if(hasItem){
          fill="#df7979"
        } else{
          fill="#72c8b9"
        }
    }else{
      fill="#df7979"
    }
  

    
    return (
        <Button parentStyle={styles.View} onPress={this.props.shouldEdit == true?EditFunc:this.props.href}>
            <Button parentStyle={styles.MainButton} onPress={this.props.shouldEdit == true?EditFunc:this.props.href}>
              <Icon fill={this.props.color || "#fff"} svg={this.props.icon} background={this.props.background|| "#ccc"} width={vw(12)} height={vw(12)} radius={vw(2)} padding={vh(1.5)}  />
              <View style={styles.textContainer}>
                <Text style={styles.text}>{this.props.text}</Text>
              </View>
            </Button>
            <Button parentStyle={styles.DeleteButton} onPress={this.props.shouldEdit == true?EditFunc:this.props.delete}>
              <Icon fill={fill} svg={icon} width={vw(12)} height={vw(12)} padding={vh(2)}/>
            </Button>
        </Button>
    );
  }
}

const styles = StyleSheet.create({
    View: {
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
    },
    MainButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      flex: 1
    },
    DeleteButton: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    }
});


export default CustomSetsItem;

