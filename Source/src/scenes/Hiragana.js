import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import { hiraganaLoad } from "../actions/HiraganaActions";

import KanaContainer from '../components/KanaContainer';
import AppContainer from '../components/AppContainer';
import SquareButton from '../components/SquareButton';

class Hiragana extends Component {



  componentDidMount(){
    this.props.hiraganaLoad();
  }


  render(){
  
      return (
        <AppContainer>
          <KanaContainer data={this.props.Hiragana.docs} />
          <SquareButton text="TEST" onPress={()=>{
            Actions.push("KanaReadingTest", {data:this.props.Hiragana.docs});
            //Actions.push("KanaTestSelect", {data: this.props.Hiragana.docs});
            }} />
        </AppContainer>
      );
  }

}



const mapStateToProps = (state) => {
  return {
    Hiragana: state.Hiragana.Data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hiraganaLoad: () => {
      dispatch(hiraganaLoad());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hiragana);

