import React, { Component } from 'react';

import {

StyleSheet,

Text,

View,

StatusBar ,

TouchableOpacity

} from 'react-native';


import Login from './Login'
import Logo from '../components/Logo';

import Form from '../components/Form';




export default class Signup extends Component{




render() {

return(

<View style={styles.container}>

<Logo/>

<Form type="Signup"/>

<View style={styles.signupTextCont}>

<Text style={styles.signupText}>Already have an account?</Text>

<TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>

</View>

</View>

)

}

}



const styles = StyleSheet.create({

container : {

backgroundColor:'#fe8a71',

flex: 1,

alignItems:'center',

justifyContent :'center'

},

signupTextCont : {

flexGrow: 1,

alignItems:'flex-end',

justifyContent :'center',

paddingVertical:16,

flexDirection:'row'

},

signupText: {

color:'rgba(255,255,255,0.6)',

fontSize:16

},

signupButton: {

color:'#f6cd61',

fontSize:16,

fontWeight:'500'

}

});
