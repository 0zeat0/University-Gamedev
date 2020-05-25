import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';
import {connect} from "react-redux";

import {ShearchIcon, KanaIcon, KanjiIcon, CustomSetIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';

class Home extends Component {



  render(){

    return (
      <AppContainer>
        <ScrollContainer>
          <Link text="Search" icon={ShearchIcon()} background="#d9f0f0" color="#788d8d" href={Actions.Search}></Link>
          <Link text="Kana" icon={KanaIcon()} background="#daf0d9" color="#8c9e8b" href={Actions.Kana}></Link>
          <Link text="Kanji" icon={KanjiIcon()} background="#f0f0d9" color="#a8a885" href={Actions.Kanji}></Link>
          <Link text="Custom sets" icon={CustomSetIcon()} background="#f0d9d9" color="#9f8c8c" href={Actions.CustomSets}></Link>
        </ScrollContainer>
      </AppContainer>
    );
  }
}



const mapStateToProps = (state) => {
  return {
    Hiragana: state.Database.Hiragana
  };
};

export default connect(mapStateToProps)(Home);

