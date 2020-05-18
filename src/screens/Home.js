import React from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';


export default function Home () {

    const cardData=useSelector(state=>{
        return state
    })


  return (
    <View style={{flex:1}}>
      <Header/>
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
    </View>
  );
}


const styles = StyleSheet.create({
 
});
