import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import { katakanaLoad } from "../actions/KatakanaActions";

import KanaContainer from '../components/KanaContainer';
import AppContainer from '../components/AppContainer';
import SquareButton from '../components/SquareButton';

class Katakana extends Component {



  componentDidMount(){
    this.props.katakanaLoad();
  }


  render(){
      return (
        <AppContainer>
          <KanaContainer data={this.props.Katakana.docs} />
          <SquareButton text="TEST" onPress={()=>{
            Actions.push("KanaReadingTest", {data:this.props.Katakana.docs});
            //Actions.push("KanaTestSelect", {data: this.props.Katakana.docs});
            }} />
        </AppContainer>
      );
  }

}



const mapStateToProps = (state) => {
  return {
    Katakana: state.Katakana.Data
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    katakanaLoad: () => {
      dispatch(katakanaLoad());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Katakana);

