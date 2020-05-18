import React, { Component } from 'react';
import { View, Text, Dimensions,StyleSheet,Image,TouchableOpacity } from 'react-native';
import { useNavigation, useTheme } from '@react-navigation/native';

const MiniCard=(props)=> {
const navigation=useNavigation()
const {colors}=useTheme()
const mycolor=colors.iconColor
  
    return (
        <TouchableOpacity onPress={()=>navigation.navigate('videoplayer',{videoId:props.videoId,title:props.title})}>

      <View style={styles.container}>

        <Image
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={styles.cardImage}/>

        <View style={styles.content}>
            <Text ellipsizeMode="tail"
            numberOfLines={3}
    style={[styles.text,{color:mycolor}]}>{props.title}</Text>
            <Text style={{fontSize:12,color:mycolor}}>{props.channel}</Text>
        </View>

      </View>
      </TouchableOpacity>
    );
  }


const styles = StyleSheet.create({
    cardImage:{
        width:'45%',
        height:100
    },
    text:{
        width:Dimensions.get("screen").width/2,
        fontSize:15
    },
    container:{
        flexDirection:'row',
        margin:10,
        marginBottom:0
    },
    content:{paddingLeft:7}
});


export default MiniCard
