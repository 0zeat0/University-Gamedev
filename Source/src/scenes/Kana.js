import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';

import {HiraganaIcon, KatakanaIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';

class Kana extends Component {
  render(){
    return (
      <AppContainer>
        <ScrollContainer>
            <Link text="Hiragana" icon={HiraganaIcon()} background="#d9f0f0" color="#83a3a3" href={Actions.Hiragana}></Link>
            <Link text="Katakana" icon={KatakanaIcon()} background="#daf0d9" color="#88ab87" href={Actions.Katakana}></Link>
        </ScrollContainer>
      </AppContainer>
    );
  }
}




export default Kana;

