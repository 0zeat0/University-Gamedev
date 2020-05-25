import React, {Component} from 'react';
import {
  StyleSheet
} from 'react-native';




import { Actions } from 'react-native-router-flux';

import {connect} from "react-redux";

import { kanaClear } from "../actions/KanaInfoActions";


import Icon from "./Icon";
import Button from "./Button";


import {LeftIcon} from '../../assets/Icons';
import {HomeIcon} from '../../assets/Icons';






import {vw} from "../utilities/Responsiveness";
import {vh} from "../utilities/Responsiveness";




class NavigationButton extends Component {



  action(){
    
    if(this.props.isHomeButton){
        Actions.popTo("Home");
    } else {
        Actions.pop();
      }
  }



  render(){

    if(this.props.isHomeButton){
      return (
        <Button onPress={() => {this.action();}}><Icon fill="#4b4b4b" svg={HomeIcon()} width={vw(13)} height={vw(13)} padding={vh(2)}/></Button>
      );
    } else 
    return (
      <Button onPress={() => {this.action();}}><Icon fill="#4b4b4b" svg={LeftIcon()} width={vw(13)} height={vw(13)} padding={vh(2)}/></Button>
    );

  }
}

const styles = StyleSheet.create({
    button: {
      width: "100%",
      backgroundColor: "#f6f6f6",
      borderRadius: vw(3),
      padding: vh(2.5),
      margin: vh(0.8),
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


const mapStateToProps = (state) => {
  return {
    Kana: state.KanaInfo.Kana
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    kanaClear: () => {
      dispatch(kanaClear());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationButton);



