import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Constants from 'expo-constants'


export default class App extends React.Component {

  render(){
  return (
    <View style={{flex:1,marginTop:Constants.statusBarHeight,}}>
     { /*<Home/>*/}
     <Search/>
    </View>
  );
}
}

const styles = StyleSheet.create({
  
});
