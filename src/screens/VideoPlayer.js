import React, { Component } from 'react';
import { View, Text,StyleSheet, Dimensions } from 'react-native';
import Constants from 'expo-constants'
import WebView from 'react-native-webview';
const VideoPlayer=({route})=> {
    const {videoId,title}=route.params
 


    return (
      <View style={styles.container}>

          <View style={styles.webcontainer}>
              <WebView
              source={{uri:`https://www.youtube.com/embed/${videoId}`}}/>
            
          </View>
    <Text style={styles.title}>{title}</Text>
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

