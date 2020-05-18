import React, { Component } from 'react';
import { View, Text,StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants'
import WebView from 'react-native-webview';
import { useTheme } from '@react-navigation/native';
const VideoPlayer=({route})=> {
    const {videoId,title}=route.params
    const {colors}=useTheme()
    const mycolor=colors.iconColor


    return (
      <View style={styles.container}>

          <View style={styles.webcontainer}>
              <WebView
              source={{uri:`https://www.youtube.com/embed/${videoId}`}}/>
            
          </View>
    <Text style={[styles.title,{color:mycolor}]}>{title}</Text>
    <View style={{borderBottomWidth:1}}/>
        
      </View>
    );
  }


const styles = StyleSheet.create({
  container:{
      flex:1,
    marginTop:Constants.statusBarHeight
  },
  webcontainer:{
      width:'100%',
      height:200
  },
  title:{
      fontSize:20,
      width:Dimensions.get('screen').width-50,
      margin:9
  }
});

export default VideoPlayer

