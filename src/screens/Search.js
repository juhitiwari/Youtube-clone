import React, { Component } from 'react';
import { View, Text, TextInput,StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import { ScrollView } from 'react-native-gesture-handler';

 class Search extends Component {

    state={
        value:""
    }


  render() {
    return (
      <View style={{flex:1}}>

          <View style={styles.header}>
              <Ionicons
              name="md-arrow-back"
              size={32}/>
              <TextInput
              onChangeText={(text)=>this.setState({value:text})}
              value={this.state.value}
              style={styles.input}/>
              <Ionicons
              name="md-send"
              size={32}/>
          </View>
            <ScrollView>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
            <MiniCard/>
            </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        padding:5,
        justifyContent:'space-around',
        borderBottomColor:"#D8D9DB",
        borderBottomWidth:1,
        

    },
    input:{
        width:"70%",
        backgroundColor:'#e6e6e6'
    }
 
});

export default Search

