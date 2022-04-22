/**
 * Dashboard mit allen Devices
 * TODO: Icon im Header ausbauen zur Übersichtsseite der Meldungen
 *       Log Out Button
 */


import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { ActivityIndicator, Alert, Platform, ScrollView, StyleSheet } from 'react-native';
import Device from '../components/Devices'
import { Text, View } from '../components/Themed';
import custom_data from '../data/MOCK_DATA.json'

export default function Dashboard({ route, navigation }:any) {
  //const {email}=route.params;
  const {t}=useTranslation();

  const [data, setData] = useState();

  let link="https://jsonplaceholder.typicode.com/posts";
  let link2='https://reactnative.dev/movies.json';
  const [isLoading, setLoading] = useState(true);
  const display:any=[];

  // const get_data=async() =>{
  //   try {
  //     const response = await fetch(link);
  //     const json_data=await response.json();
  //     setData(json_data)

  //     // const response = await fetch('https://reactnative.dev/movies.json');
  //     // const json = await response.json();
  //     // setkey(json.movies);
      
          
  //   } catch (error) {
  //     console.error(error);
  //   }  finally {
  //     setLoading(false);

  //   }

  // }

  // useEffect(() => {
  //   get_data();
  // }, []);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

if(isLoading==false){
  var data_filter = custom_data.filter( (element:any) => element.value >="60")
const map_data=data_filter.map((data:any)=>{
  
    let disturbance;

    if(data.disturbance==true){
      disturbance=t('device_detail.disturbance_false');
    }else{
      disturbance=t('device_detail.disturbance_true');
    }

    display.push(
      <Device 
        key={data.id} 
        id={data.id} 
        name={data.device_name} 
        wert={data.value+"°C"} 
        zustand={disturbance}
        last_update={convert_timestamp(data.last_update)} 
        onPress={() =>             
          navigation.navigate("DeviceDetail",{
          name:data.device_name,
          itemId:data.id,
          warning:"keine Störung",
        })
      }
        />
    )
}
);
}
  return (
    <ScrollView  contentContainerStyle={isLoading==true ? styles.loading:styles.container}>
    {isLoading==true ? <ActivityIndicator size="large" color="red" /> :  display} 
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
  loading:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
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
function convert_timestamp(last_update: any) {
  var number=parseInt(last_update);
  var d=new Date(number);
  var formatted = d.toLocaleDateString()+"-"+d.toLocaleTimeString();
  return formatted;
}

