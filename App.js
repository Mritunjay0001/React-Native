
import React, { useState } from 'react';

// import type {PropsWithChildren} from 'react';
import {Button,Text,View,StyleSheet, TextInput, FlatList} from 'react-native';
import MyData from './components/MyData';


// const name= "akshay";
// let age= 20;
// var email= "akshay@gmail.com";

// const pressCheck=()=>{
//   console.warn("Button Pressed")
// }


function App() {
  // const [name,setName]=useState("Akshay Chauhan")
  // const [name,setName]=useState("")
  // const [email,setEmail]=useState("")
  // const [password,setPassword]=useState("")
  // const [display, setDisplay]=useState(false);

  // const resetData = () =>{
  //   setDisplay(false);
  //   setEmail(false);
  //   setName(false);
  //   setPassword(false)
  // }

  // function updateIt(){
  //   setName("rajput")
  // }

  // const users= [
  //   {
  //     id:1,
  //     name:"Akshay"
  //   },
  //   {
  //     id:2,
  //     name:"Santosh"
  //   },
  //   {
  //     id:3,
  //     name:"Govind"
  //   },
  //   {
  //     id:4,
  //     name:"Satya"
  //   }
  // ]
  
  return (
//     <View>
//       {/* this is the first thing ---------> */}


// {/* <Text style={{fontSize:30}}>akshay</Text>
// <Text style={{fontSize:30}}>singh</Text>
// <Text style={{fontSize:30}}>rajput</Text>
// <Text style={{fontSize:30}}>aurangabad</Text>
// <Button title='Click '></Button>  */}

//  {/* we can write html in view component and we can write js inside html------- */}

//  {/* <Text style={{fontSize:30}}>{name}</Text>
//   <Text style={{fontSize:30}}>{age}</Text>
//   <Text style={{fontSize:30}}>{email}</Text> */}



//    {/* THIS IS HOW WE CAN USE MULTIPLE COMPONENTS  */}

//    {/* <Text style={{fontSize:30}}>Components</Text>
//    <Some/>
//    <MyData/> */}


  

  
//   </View>

<View>
   {/* ------WE ARE GOING TO ADD BUTTON AND ALL------- */}

   {/* <Text style={{fontSize:30}}>Button and OnPress</Text>
   <Button title='Press Me' onPress={pressCheck} color={'black'}></Button> */}

 {/* ------------USSTATE IN NATIVE AND UPDATE IN ONPRESS---- */}

 {/* <Text style={{fontSize:30}}>Update The Name</Text>
 <Text style={{fontSize:20}}>{name}</Text> */}

 {/* -------this is how we can set name and update name with parameter--- */}
 {/* <Button title='press' onPress={()=>setName("Sonu")}></Button> */}

 {/* -----------this is how wer can update date with function call---- */}
{/* <Button title='press' onPress={updateIt}></Button> */}


 {/* -------------PROPS and update IN NATIVE------ */}

 {/* <Text style={{fontSize:30}}>Props In Native</Text>
 <Button title='update' onPress={()=>setName("sonu rajput")}></Button>
 <PropsData name={name}/> */}

  {/* -----------STYLING IN NATIVE------- */}
               {/* Inline style */}
  {/* <Text style={{fontSize:30, color:"red",marginTop:10, backgroundColor:"teal",padding:20,borderRadius:20, textAlign: 'center'}}>Styling In Native</Text> */}

                 {/* Class components styling  */}
    {/* <Text style={styles.textBox}>Wow </Text>        */}



    {/* -------GET THE INPUT VALUE | HANDLING THE TEXT-------- */}
    {/* <Text style={{fontSize:30, color:"white",marginTop:10, backgroundColor:"teal",padding:20,borderRadius:20, textAlign: 'center'}}>Get text input value</Text>

    <Text style={{fontSize:30, color:"red",marginTop:10, backgroundColor:"black",padding:20,borderRadius:20, textAlign: 'center'}}>Your Name IS : {name} </Text>

    <TextInput
    style={{fontSize:16, color:"blue", borderWidth:2,marginTop:10,}}
    placeholder='Enter Your Input'
    value={name}
    onChangeText={(text)=>setName(text)}
    />
    <Button title='CLEAR NAME' onPress={()=>setName('')}/>
                   */}


            {/* ----------FORM IN NATIVE--------        */}

    {/* <Text style={{fontSize:30, color:"white",marginTop:10, backgroundColor:"teal",padding:20,borderRadius:20, textAlign: 'center'}}>Simple Form</Text>       
    <TextInput 
    placeholder='Enter user Name'
    style={styles.textInput }
    onChangeText={(text)=>setName(text)}
    value={name}
    /> 

<TextInput 
    placeholder='Enter user Email'
    style={styles.textInput }
    onChangeText={(text)=>setEmail(text)}
    value={email}
    /> 

<TextInput 
    placeholder='Enter user Password'
    style={styles.textInput }
    onChangeText={(text)=>setPassword(text)}
    secureTextEntry={true}
    value={password}
    /> 
   <View style={{marginTop:10,marginBottom:10}}>
   <Button color={"green"} title='Print detail' onPress={()=>setDisplay(true)} />
   </View>
   <Button color={"red"} title='clear detail'  onPress={()=>setDisplay(resetData)} />

   <View>
    {
      display ?
      <View>
        <Text style={{fontSize:20}}>User Name Is : {name}</Text>
        <Text style={{fontSize:20}}>User Email Is : {email}</Text>
        <Text style={{fontSize:20}}>User Password Is : {password}</Text>
      </View>:null
    }
   </View> */}

      
      {/* ---------------MAKING LIST IN NATIVE-------- */}
     
      {/* <Text style={{fontSize:20, color:"white",marginTop:10, backgroundColor:"teal",padding:20,borderRadius:20, textAlign: 'center'}}>LIST WITH FLAT LIST COMPONENTS</Text> 
      <FlatList 
      data={users}
      renderItem={({item})=> <Text>{item.name}</Text>}
      /> */}


       {/* ---------HOW TO MAKE GRID---- */}
       <Text style={{fontSize:20, color:"white",marginTop:10, backgroundColor:"teal",padding:20,borderRadius:20, textAlign: 'center'}}>GRID WITH DYNAMIC DATA</Text>

       <View style={{flex:1,flexDirection:"row",flexWrap:"wrap"}}>
        <Text style={styles.item}>AKSHAY</Text>
        <Text style={styles.item}>AKSHAY</Text>
        <Text style={styles.item}>AKSHAY</Text>    
        <Text style={styles.item}>AKSHAY</Text>   
       </View>
          
</View>
  
  );
}

const styles = StyleSheet.create({
  item:{
    fontSize:25,
    backgroundColor:"pink",
    color: "white",
    margin:5,
    padding:5,
    width:120,
    height:120,
    textAlignVertical:"center",
    textAlign:"center",
  }
})

// const styles = StyleSheet.create({
//   textInput:{
//     fontSize:20, 
//     color:"black",
//     borderWidth:2,
//     marginTop:10,
//     borderRadius:20
//   }
// })

// const styles = StyleSheet.create({
//   textBox:{
//     color:"blue",
//     fontSize:30,
//     // marginLeft:50,
//     backgroundColor:"pink",
//     padding:10,
//     borderRadius:20,
//     marginTop:10,
//     textAlignVertical:'center',
//     textAlign: 'center'
    
//   }
  
// })


// const PropsData=(props)=>{

// return (
  
//   <View style={{backgroundColor:"red", padding:10}}>
//     <Text style={{fontSize:30}}>{props.name}</Text>
//   </View>
// )
// }


// const Some=()=>{
//   return (
//     <View>
//     <Text style={{fontSize:30}}>{name}</Text>
//       <Text style={{fontSize:10}}>singh</Text>
//       <Text style={{fontSize:30}}>singh</Text>
//     </View>
//   )
// }




export default App;
