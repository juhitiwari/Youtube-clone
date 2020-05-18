import React, { Component } from 'react';
import { View, Text,StyleSheet,FlatList, ScrollView } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';

const LittleCard=({name})=>{
    
    return (
        <View style={styles.card}>
            <Text style={styles.cardText}>
               {name}
            </Text>

        </View>
    )
}

const Explore=()=> {
    const cardData=useSelector(state=>{
        return state.cardData
    })


    return (
      <View style={{flex:1}}>
        <Header/>
        <ScrollView>
        <View style={styles.cardContainer}>
        <LittleCard name="Trending"/>
        <LittleCard name="Music"/>
        <LittleCard name="Gaming"/>
        <LittleCard name="News"/>
        <LittleCard name="Movies"/>
        <LittleCard name="Fashion"/>
        <LittleCard name="Learning"/>
        <LittleCard name="#WithMe"/>
        </View>
        <Text style={styles.trending}>
            Trending Videos
        </Text>
        <FlatList
      data={cardData}
      keyExtractor={item=>item.id.videoId}
      renderItem={({item})=>{
          return <Card
          videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}
          />
      }}/>
      </ScrollView>
      </View>
    );
  }


const styles = StyleSheet.create({
    card:{
        backgroundColor:'red',
        width:160,
        height:40,
        marginTop:10,
        borderRadius:4,
        justifyContent:'center'
    },
    cardText:{
        textAlign:'center',
        color:'white',
        fontSize:18,
        
        
    },
    cardContainer:{
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:"space-around"
    },
    trending:{
        margin:8,
        fontSize:22,
        borderBottomWidth:1
    }
  
});

export default Explore
