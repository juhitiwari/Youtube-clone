import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import {NavigationContainer,DefaultTheme,DarkTheme,useTheme} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import VideoPlayer from './src/screens/VideoPlayer';
import Explore from './src/screens/Explore';
import Subscribe from './src/screens/Subscribe';
import { MaterialIcons } from '@expo/vector-icons';
import {Provider} from 'react-redux'
import { createStore } from 'redux';
import {reducer} from './src/reducers/reducer';
//import store from './src/store'


const Stack = createStackNavigator()
const Tabs = createBottomTabNavigator()

const store=createStore(reducer)

const RootHome=()=>{
  return (
    <Tabs.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color }) => {
        let iconName;

        if (route.name === 'home') {
          iconName = 'home';
        } else if (route.name === 'explore') {
          iconName = 'explore';
        }else if(route.name === 'subscribe'){
          iconName = 'subscriptions'
        }

        return <MaterialIcons name={iconName} size={32} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: 'red',
      inactiveTintColor: 'gray',
    }}
    >
      <Tabs.Screen name="home" component={Home} />
      <Tabs.Screen name="explore" component={Explore} />
      <Tabs.Screen name="subscribe" component={Subscribe} />
    </Tabs.Navigator>
  )
}


export default function App(){
  return(
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
      <Stack.Screen name="rootHome" component={RootHome} />
      <Stack.Screen name="search" component={Search} />
      <Stack.Screen name="videoplayer" component={VideoPlayer} />

      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}