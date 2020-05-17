import React, { Component } from 'react';
import { View, Text, Dimensions,StyleSheet,Image } from 'react-native';

class MiniCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
        source={{uri:"https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}}
        style={styles.cardImage}/>

        <View style={styles.content}>
            <Text ellipsizeMode="tail"
            numberOfLines={3}
            style={styles.text}>fehfiqhowhfeh</Text>
            <Text style={{fontSize:12}}>fer</Text>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
    cardImage:{
        width:'45%',
        height:100
    },
    text:{
        width:Dimensions.get("screen").width/2,
        fontSize:18
    },
    container:{
        flexDirection:'row',
        margin:10,
        marginBottom:0
    },
    content:{paddingLeft:7}
});


export default MiniCard
