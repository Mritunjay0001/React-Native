
import React from 'react';
// import type {PropsWithChildren} from 'react';
import {

  Text,
 Button,
  View,
} from 'react-native';


const name= "akshay";
let age= 20;
var email= "akshay@gmail.com";


function App(): JSX.Element {
  
  return (
    <View>
      {/* this is the first thing ---------> */}


{/* <Text style={{fontSize:30}}>akshay</Text>
<Text style={{fontSize:30}}>singh</Text>
<Text style={{fontSize:30}}>rajput</Text>
<Text style={{fontSize:30}}>aurangabad</Text>
<Button title='Click '></Button>  */}

 {/* we can write html in view component and we can write js inside html------- */}

 <Text style={{fontSize:30}}>{name}</Text>
  <Text style={{fontSize:30}}>{age}</Text>
  <Text style={{fontSize:30}}>{email}</Text>

  
    
    </View>
    
    
  );
}



export default App;
