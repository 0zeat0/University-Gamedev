import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing
} from 'react-native';

import Svg, {
    Path,
    Use,
    Defs,
    ClipPath,
  } from 'react-native-svg';


import {connect} from "react-redux";


import {vw} from "../utilities/Responsiveness";


import { animatedCharacterInit } from "../actions/AnimatedCharacterActions";
import { animatedCharacterCount } from "../actions/AnimatedCharacterActions";



let AnimatedPath = Animated.createAnimatedComponent(Path);


class AnimatedCharacter extends Component {


    constructor(props) {
        super(props);
        this.Play = this.Play.bind(this);
        this.Update = this.Update.bind(this);
     }

    componentDidMount(){
        this.props.setPlay(this.Play);
        this.props.setUpdate(this.Update);
        this.Init();
    }

    componentDidUpdate(){
        //this.Init();
       
        //this.Play();
    }

    Play(){
        this.Reset();
        if(this.props.object != undefined){
            for(let i = 0; i < this.props.count; i++){
                this.Draw(i);
            }
        }
    }

    Update(){

      setTimeout(()=>{
        this.Init();
      }, 0);

    }

    Init(){
        this.props.animatedCharacterCount(this.props.svg);
        this.props.animatedCharacterInit(this.props.svg);
        setTimeout(()=>{
          this.Play();
        }, 500);
    }


    Reset(){
        for(let i = 0; i < this.props.count; i++){
            this.props.object["id"+i].setValue(3339);
        }
    }

    Draw(i){
      let id = "id"+i;
      let speedMult = 1.6;
      let delayMult = 0.7;
  
      let delay = (this.props.svg.delays[i]*speedMult*delayMult) - (this.props.svg.delays[0]*speedMult*delayMult);
    
        Animated.timing(this.props.object[id],{
          toValue:0,
          duration:800*speedMult,
          useNativeDriver:true,
          easing: Easing.quad,
          delay: delay
        }).start();
      }

  render(){


    return (
        <View style={styles.AnimatedCharacter}>
            <Svg id={"svg"+this.props.svg.unicode} viewBox="0 0 1024 1024">

                {this.props.svg.clips.map((clip, i) => {          
                return (
                <Path 
                    key={"P"+this.props.svg.IDs[i]} 
                    id={"P"+this.props.svg.IDs[i]}
                    fill="#ccc"
                    d={clip}
                />
                ) 
                })}
           
                <Defs>
                    {this.props.svg.clips.map((clip, i) => {          
                    return (
                    <ClipPath
                        key={"C"+this.props.svg.IDs[i]} 
                        id={"C"+this.props.svg.IDs[i]}
                    >
                        <Use href={"#P"+this.props.svg.IDs[i]} />
                    </ClipPath>
                    ) 
                    })}
                </Defs>

                
                {this.props.svg.paths.map((path, i) => {          
                return (
                <AnimatedPath 
                    key={"AM"+this.props.svg.IDs[i]} 
                    id={"AM"+this.props.svg.IDs[i]}
                    strokeDashoffset={this.props.object["id"+i]}
                    strokeDasharray="3337"
                    strokeLinecap="round"
                    stroke="#4b4b4b"
                    fill="none"
                    strokeWidth="128"
                    clipPath={"url(#C"+this.props.svg.IDs[i]+")"}
                    d={path}
                />
                ) 
                })}

            </Svg>
        </View>
    );
  }
}


const styles = StyleSheet.create({
    AnimatedCharacter: {
    width: vw(34),
    height: vw(34),
    marginBottom: vw(2),
    flexDirection: "column",
    alignItems: "center",
    justifyContent:  "center"
  }
});


const mapStateToProps = (state) => {
  return {
    object: state.AnimatedCharacter.object,
    count: state.AnimatedCharacter.count
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    animatedCharacterInit: (svg) => {
      dispatch(animatedCharacterInit(svg));
    },
    animatedCharacterCount: (svg) => {
        dispatch(animatedCharacterCount(svg));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AnimatedCharacter);

