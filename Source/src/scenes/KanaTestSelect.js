import React, {Component} from 'react';


import { Actions } from 'react-native-router-flux';


import {ReadingIcon, WritingIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';


class KanaTestSelect extends Component {
  render(){
    return (
      <AppContainer>
      <ScrollContainer>
          <Link text="Reading" icon={ReadingIcon()} background="#daf0d9" color="#8c9e8b" href={()=>{
            Actions.push("KanaReadingTest", {data:this.props.data});
          }}></Link>
          {/* <Link text="Writing" icon={WritingIcon()} background="#d9f0f0" color="#8a9a9a" href={Actions.Kana}></Link> */}
      </ScrollContainer>
    </AppContainer>
    );
  }
}



export default KanaTestSelect;

