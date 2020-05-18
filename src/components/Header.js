import React, { Component } from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';
import {Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useNavigation ,useTheme} from '@react-navigation/native';

export default function Header(){

    const navigation = useNavigation()

 
    return (
      <View style={styles.header}>
        <View style={{flexDirection:'row',margin:5}}>
            <Entypo
            name="youtube"
            size={32}
            color="red"
            style={{marginLeft:20}}/>
            <Text style={styles.headerText}>YouTube</Text>
        </View>
        <View style={styles.headerIcons}>
            <Ionicons
            name="md-videocam"
            size={32}
            color='#212121'/>
            <Ionicons
            name="md-search"
            size={32}
            color='#212121'
            onPress={()=>navigation.navigate('search')}/>
            <MaterialIcons
            name="account-circle"
            size={32}
            color='#212121'/>

        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
    header:{
        height:45,
        backgroundColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomColor:"#D8D9DB",
        borderBottomWidth:1,
        marginTop:Constants.statusBarHeight
        
    },
    headerText:{
        fontSize:22,
        marginLeft:5,
        fontWeight:"bold",
        color:'#212121'
    },
    headerIcons:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:150,
        margin:5

    }
 
});
