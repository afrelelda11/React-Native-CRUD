import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './src/pages/Login'
import Signup from './src/pages/Signup'
;

import React, {Component} from 'react';
const AppNavigator = createStackNavigator({
  Signup: {screen: Signup, navigationOptions: {
    header: null,
  }},
  Login: {screen: Login, navigationOptions: () => ({
    header: null,  
  })},

});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}