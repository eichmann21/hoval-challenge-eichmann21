/**
 * Dashboard mit allen Devices
 * TODO: Icon im Header ausbauen zur Übersichtsseite der Meldungen
 *       Log Out Button
 */


import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Platform, ScrollView, StyleSheet } from 'react-native';
import Device from '../components/Devices'
import { Text, View } from '../components/Themed';

export default function Dashboard({ route, navigation }:any) {
  //const {email}=route.params;

  var devices=[];
  for(let i=0;i<=10;i++){

    let x: string | undefined;
    if(i==3 || i==7){
      x="Störung"
    }else{
      x="keine Störung"
    }
    devices.push(
    <Device 
    key={i} 
    id={i} 
    name={"test"+i} 
    wert={i+"°C"} 
    zustand={x}
    last_update="x" 
    onPress={() =>             
      navigation.navigate("DeviceDetail",{
      name:"test"+i,
      itemId:i,
      warning:x,
    })
  }
    />)
  }
  return (
    <ScrollView  contentContainerStyle={styles.container}>
      {devices}
      {/*Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </ScrollView >
  );
}




const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:"center",
    padding:20,
    backgroundColor:"#d9dbde",
    
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
