import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

 class Card extends Component {
 

  render() {
    return (
      <View style={styles.container}>
        <Image
        source={{uri:"https://images.unsplash.com/photo-1496425745709-5f9297566b46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"}}
        style={styles.cardImage}/>

        <View style={styles.account}>
            <MaterialIcons
            name="account-circle"
            size={32}
            color='#212121'/>
            <View style={styles.text}>
                <Text style={{fontSize:20}} ellipsizeMode="tail" numberOfLines={1}>
                    erj
                </Text>
                <Text>
                    fenk
                </Text>

            </View>
        </View>
        


      </View>
      
    );
  }
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
        marginLeft:10,
    
    },
    container:{
        marginBottom:10
    }
    
})


export default Card;


