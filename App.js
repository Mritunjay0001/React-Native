
import React from 'react';

// import type {PropsWithChildren} from 'react';
import {

  Text,
 Button,
  View,
} from 'react-native';
import MyData from './components/MyData';


const name= "akshay";
let age= 20;
var email= "akshay@gmail.com";

const pressCheck=()=>{
  console.warn("Button Pressed")
}


function App() {
  
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

   <Text style={{fontSize:30}}>Button and OnPress</Text>
   <Button title='Press Me' onPress={pressCheck} color={'black'}></Button>
</View>
  
  );
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
