import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';

export default class Home extends React.Component {

render(){
  return (
    <View style={{flex:1}}>
      <Header/>
      <ScrollView>

      
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      </ScrollView>
    </View>
  );
}
}

const styles = StyleSheet.create({
 
});
