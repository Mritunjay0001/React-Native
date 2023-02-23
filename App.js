
import React, { useState } from 'react';

// import type {PropsWithChildren} from 'react';
import {

  Text,
 Button,
  View,
} from 'react-native';
import MyData from './components/MyData';


// const name= "akshay";
// let age= 20;
// var email= "akshay@gmail.com";

// const pressCheck=()=>{
//   console.warn("Button Pressed")
// }


function App() {
  const [name,setName]=useState("Akshay Chauhan")

  // function updateIt(){
  //   setName("rajput")
  // }
  
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

 <Text style={{fontSize:30}}>Props In Native</Text>
 <Button title='update' onPress={()=>setName("sonu rajput")}></Button>
 <PropsData name={name}/>
</View>
  
  );
}

const PropsData=(props)=>{

return (
  
  <View style={{backgroundColor:"red", padding:10}}>
    <Text style={{fontSize:30}}>{props.name}</Text>
  </View>
)
}


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
