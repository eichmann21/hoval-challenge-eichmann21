/**
 * Eignene Component Klasse Device mit id,name,aktueller zustand(stoerung/keine stoerung), aktueller wert, onPress Event und letztes Update
 * Wird bei Dashboard Screen benutzt
 */


import React ,{Component} from "react";
import { View, Text, StyleSheet, NativeSyntheticEvent, NativeTouchEvent, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from "react-i18next";
import { t } from "i18next";

/**
 * Interface für eigene Namen
 */
interface Device {
    id?:number,
    name?:string,
    zustand?:string,
    wert?:string,
    onPress: () => any;
    last_update?:string,
}


export default class Devices  extends Component <Device> { 
    render() { 

        let style_zustand;
        if(this.props.zustand!=t('component_devices.disturbance_true')){
            style_zustand=styles.state1
        }else{
            style_zustand=styles.state2
        }
      return (
        <TouchableOpacity
        onPress={this.props.onPress}
        >
        <View style={styles.rectangle}>
            <Text style={styles.heading}>{this.props.name}</Text>
            <AntDesign name="home" size={40} color="black" />
            <Text style={styles.data}>{t('component_devices.aktueller_wert')} {this.props.wert}</Text>
            <Text style={style_zustand}>{this.props.zustand}</Text> 
            <Text style={styles.update}>{t('component_devices.letztes_update')}{this.props.last_update}</Text> 

        </View> 
        </TouchableOpacity>
      );
    }
  }

  const styles = StyleSheet.create({
    rectangle: {
      borderWidth:1,
      width:300,
      height:200,
      borderRadius:15,
      backgroundColor:"white",
      borderColor:"white",
      alignItems:"center",
      padding:20,
      margin:10,
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      paddingBottom:10,
    },

    data:{
        fontSize:15,
        paddingBottom:10,
    },

    state1:{
        fontSize:15,
        paddingBottom:10,
    },

    state2:{
        fontSize:15,
        color:"red",
        paddingBottom:10,
    },
    update:{
      fontSize:15,
      fontWeight:"bold",
      paddingBottom:10,
    }

    
  });