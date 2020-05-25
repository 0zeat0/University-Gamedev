import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';

import {CustomSetIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';

class Kanji extends Component {
  render(){
    return (
      <AppContainer>
        <ScrollContainer>
            <Link text="JLPT N5" icon={CustomSetIcon()} background="#d9f0f0" color="#83a3a3" href={()=>{Actions.push("JLPTLevel", {level:5, sets:5});}}></Link>
            <Link text="JLPT N4" icon={CustomSetIcon()} background="#daf0d9" color="#8c9e8b" href={()=>{Actions.push("JLPTLevel", {level:4, sets:9});}}></Link>
            <Link text="JLPT N3" icon={CustomSetIcon()} background="#f0f0d9" color="#aaaa8d" href={()=>{Actions.push("JLPTLevel", {level:3, sets:25});}}></Link>
            <Link text="JLPT N2" icon={CustomSetIcon()} background="#f0e2d9" color="#aa9e97" href={()=>{Actions.push("JLPTLevel", {level:2, sets:13});}}></Link>
            <Link text="JLPT N1" icon={CustomSetIcon()} background="#f0d9d9" color="#ae9c9c" href={()=>{Actions.push("JLPTLevel", {level:1, sets:9});}}></Link>
            {/* <Link text="OTHER" icon={CustomSetIcon()} background="#e3e3e3" color="#a4a4a4" href={()=>{Actions.push("JLPTLevel", {level:0});}}></Link> */}
        </ScrollContainer>
      </AppContainer>
    );
  }
}




export default Kanji;

