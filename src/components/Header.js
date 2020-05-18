import React, { Component } from 'react';
import { View, Text,StyleSheet, Button } from 'react-native';
import {Entypo, Ionicons, MaterialIcons} from '@expo/vector-icons'
import Constants from 'expo-constants'
import { useNavigation ,useTheme} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
export default function Header(){

    const navigation = useNavigation()
const {colors}=useTheme()
const mycolor=colors.iconColor
const dispatch=useDispatch()
    const currentTheme=useSelector(state=>{
        return state.myDarkMode
    })


 
    return (
      <View style={[styles.header,{backgroundColor:colors.headerColor}]}>
        <View style={{flexDirection:'row',margin:5}}>
            <Entypo
            name="youtube"
            size={32}
            color="red"
            style={{marginLeft:20}}/>
            <Text style={[styles.headerText,{color:mycolor}]}>YouTube</Text>
        </View>
        <View style={styles.headerIcons}>
            <Ionicons
            name="md-videocam"
            size={32}
            color={mycolor}/>
            <Ionicons
            name="md-search"
            size={32}
            color={mycolor}
            onPress={()=>navigation.navigate('search')}/>
            <MaterialIcons
            name="account-circle"
            size={32}
            color={mycolor}
            onPress={()=>dispatch({type:'add_theme',payload:!currentTheme})}/>

        </View>
      </View>
    );
  }


const styles = StyleSheet.create({
    header:{
        height:45,
        
        flexDirection:'row',
        justifyContent:'space-between',
       // borderBottomColor:"#D8D9DB",
        borderBottomWidth:1,
        marginTop:Constants.statusBarHeight
        
    },
    headerText:{
        fontSize:22,
        marginLeft:5,
        fontWeight:"bold",
       
    },
    headerIcons:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:150,
        margin:5

    }
 
});
