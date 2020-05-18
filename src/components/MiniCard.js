import React, { Component } from 'react';
import { View, Text, Dimensions,StyleSheet,Image } from 'react-native';

class MiniCard extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
        source={{uri:`https://i.ytimg.com/vi/${this.props.videoId}/hqdefault.jpg`}}
        style={styles.cardImage}/>

        <View style={styles.content}>
            <Text ellipsizeMode="tail"
            numberOfLines={3}
    style={styles.text}>{this.props.title}</Text>
            <Text style={{fontSize:12}}>{this.props.channel}</Text>
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
