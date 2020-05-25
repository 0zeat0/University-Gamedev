import React, {Component} from 'react';

import { Actions } from 'react-native-router-flux';

import {CustomSetIcon} from '../../assets/Icons';

import Link from '../components/Link';
import ScrollContainer from '../components/ScrollContainer';
import AppContainer from '../components/AppContainer';

class JLPTLevel extends Component {



  render(){


    let sets = [];
    for (let i = 1; i <= this.props.sets; i++) {
      sets.push(
       {
          key:"Set"+i,
          text:"Set "+i+"/"+this.props.sets,
          icon:CustomSetIcon(),
          background:"#e3e3e3",
          color:"#a4a4a4", 
          href:()=>{Actions.push("KanjiSet", {level:this.props.level, set:i});}
       }
      );
    }

    return (
      <AppContainer>
        <ScrollContainer>
          {sets.map((item) => (
            <Link 
              key={item.key} 
              text={item.text} 
              icon={item.icon} 
              background={item.background}
              color={item.color}
              href={item.href}>
            </Link>
          ))}
        </ScrollContainer>
      </AppContainer>
    );
  }
}


export default JLPTLevel;

