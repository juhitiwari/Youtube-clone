import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation,useTheme } from '@react-navigation/native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Card= (props)=> {
 
    const navigation=useNavigation()
    const {colors}=useTheme()
    const mycolor=colors.iconColor

    return (
      <View style={styles.container}
      >
          <TouchableOpacity onPress={()=>navigation.navigate('videoplayer',{videoId:props.videoId,title:props.title})}>
        <Image
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={styles.cardImage}/>

        <View style={styles.account}>
            <MaterialIcons
            name="account-circle"
            size={32}
            color="#404040"/>
            <View style={{marginLeft:10}}>
                <Text style={[styles.text,{color:mycolor}]}
                ellipsizeMode="tail"
            numberOfLines={1}>
                    {props.title}
                </Text>
                <Text style={{color:mycolor}}>
                    {props.channel}
                </Text>

            </View>
        </View>
        
        </TouchableOpacity>

      </View>
      
    );
  }


const styles=StyleSheet.create({
    cardImage:{
        width:'100%',
        height:200
    },
    account:{
        flexDirection:'row',
        margin:5
    },
    text:{
        width:Dimensions.get("screen").width-50,
    
    },
    container:{
        marginBottom:10
    }
    
})


export default Card;


