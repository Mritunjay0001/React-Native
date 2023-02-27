import React, { useState,Component } from 'react';
import {Button,Text,View,StyleSheet, TextInput, FlatList, SectionList} from 'react-native';

class Student extends Component{
    render(){
      console.warn(this.props)
      return (
        <View>
          <Text style={{fontSize:20,color:"black",textAlign:"center",backgroundColor:"grey",marginTop:10,padding:10,borderRadius:20}}>STUDENT COMPONENTS</Text>


          <Text style={{fontSize:18,color:"black",textAlign:"center",backgroundColor:"grey",marginTop:10,padding:10,borderRadius:20}}>STUDENT NAME : {this.props.name}</Text>
       
        </View>
      )
    }
  }

  export default Student;