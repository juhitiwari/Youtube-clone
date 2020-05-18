import React, { Component,useState} from 'react';
import { View, Text, TextInput,StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import MiniCard from '../components/MiniCard';
import { ScrollView } from 'react-native-gesture-handler';
import Constants from 'expo-constants'
import {useSelector,useDispatch} from 'react-redux'
import { useTheme } from '@react-navigation/native';





const Search =({navigation})=> {

    const {colors}=useTheme()
    const mycolor=colors.iconColor



    const [value,setValue] = useState("")
    // const [miniCardData,setMiniCard] = useState([])
    const dispatch = useDispatch()
    const miniCardData = useSelector(state=>{
        return state.cardData
    })
    const [loading,setLoading] = useState(false)

    const fetchData=()=>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyA3yNOOZX0_TLxMT2mmm8QXVykYSGf_5PQ`)
        .then(res=>res.json())
        .then(data=>{
           
            console.log(data.items)
            setLoading(false)
            dispatch({type:"add_video",payload:data.items})

        })
        .catch(function(eror){
            console.log(eror.message)
            throw eror
        })
    }


  
    return (
      <View style={{flex:1}}>

          <View style={[styles.header,{backgroundColor:colors.headerColor}]}>
              <Ionicons
              name="md-arrow-back"
              size={32}
              color={mycolor}
              onPress={()=>navigation.goBack()}/>
              <TextInput
              onChangeText={(text)=>setValue(text)}
              value={value}
              style={styles.input}/>
              <Ionicons
              name="md-send"
              size={32}
              color={mycolor}
              onPress={()=>fetchData()}/>
          </View>

          {loading?<ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null}

          <FlatList
          data={miniCardData}
          renderItem={({item})=>{
              return <MiniCard
              videoId={item.id.videoId}
              title={item.snippet.title}
              channel={item.snippet.channelTitle}/>
          }}
          keyExtractor={item=>item.id.videoId}/>
            
           
      </View>
    );
  }


const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        padding:5,
        justifyContent:'space-around',
        borderBottomColor:"#D8D9DB",
        borderBottomWidth:1,
        marginTop:Constants.statusBarHeight
        

    },
    input:{
        width:"70%",
        backgroundColor:'#e6e6e6'
    }
 
});


export default Search

