import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Card= (props)=> {
 


    return (
      <View style={styles.container}>
        <Image
        source={{uri:`https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}}
        style={styles.cardImage}/>

        <View style={styles.account}>
            <MaterialIcons
            name="account-circle"
            size={32}
            color='#212121'/>
            <View style={{marginLeft:10}}>
                <Text style={styles.text}
                ellipsizeMode="tail"
            numberOfLines={1}>
                    {props.title}
                </Text>
                <Text>
                    {props.channel}
                </Text>

            </View>
        </View>
        


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


