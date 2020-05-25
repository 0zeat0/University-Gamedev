import React, {Component} from 'react';
import {
  TouchableOpacity,
  View
} from 'react-native';

import {connect} from "react-redux";

import { setTimer } from "../actions/ButtonActions";
import { setIsDisabled } from "../actions/ButtonActions";


class Button extends Component {

  onButtonPress(onPress){

    let cooldown = 0;
    if(this.props.cooldown){
      cooldown = this.props.cooldown;
    }

    if(this.props.IsButtonDisabled == false){
      onPress();
      this.props.setIsDisabled(true);
      setTimeout(()=>{
        this.props.setIsDisabled(false);
      },cooldown);
    }

  }
  

  render(){

    if(this.props.isActive == undefined || this.props.isActive == true){
      return (
        <TouchableOpacity
            style={this.props.parentStyle}
            onPress={()=>{this.onButtonPress(this.props.onPress);}}
            >
            {this.props.children}
        </TouchableOpacity>
    );
    } if(this.props.isActive == false){
      return (
        <View
            style={this.props.parentStyle}
            >
            {this.props.children}
        </View>
    );
    }

    
  }
}


const mapStateToProps = (state) => {
  return {
    ButtonTimer: state.Button.ButtonTimer,
    IsButtonDisabled: state.Button.IsButtonDisabled
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setTimer: (time) => {
      dispatch(setTimer(time));
    },
    setIsDisabled: (is) => {
      dispatch(setIsDisabled(is));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);



