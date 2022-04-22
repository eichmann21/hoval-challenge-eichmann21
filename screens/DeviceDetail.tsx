/**
 * Screen für Detailseite, ist Störung vorhanden wird zusätzlich der Button für Störung quittiert angezeigt
 * TODO: Uhrzeit anzeigen wann Störung aufgetreten ist
 */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Button, Platform, Pressable, StyleSheet, ToastAndroid } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ModalScreen({ route }: any) {
  const { name, itemId, warning } = route.params;
  const [textValue, setTextvalue] = useState('');
  const [buttonStoerung, setbuttonStoerung] = useState(false);
  const {t}=useTranslation();

  let light_off=t('device_detail.light_off');
  let light_on=t('device_detail.light_on');

  let window_close=t('device_detail.window_close');
  let window_open=t('device_detail.window_open');

  let disturbance_false=t('device_detail.disturbance_false');

  const [pressable_text_light, setpressable_text_light] = useState(light_off);
  const [pressable_text_window, setpressable_text_window] = useState(window_open);

  if (JSON.stringify(warning) == disturbance_false) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{JSON.stringify(name)}</Text>
        <Text style={styles.title}>{JSON.stringify(itemId)}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{
          flexDirection:"row",
          direction:"rtl",
        }}>
          <Pressable key="light" onPress={() => {
            if (pressable_text_light == light_off) {
              ToastAndroid.show(t('device_detail.light_message_off'), ToastAndroid.SHORT)
              setpressable_text_light(light_on)
            } else {
              ToastAndroid.show(t('device_detail.light_message_on'), ToastAndroid.SHORT)
              setpressable_text_light(light_off)
            }

          }} onLongPress={()=>{ToastAndroid.show(t('device_detail.light_long_press'), ToastAndroid.SHORT)}}>
            <Text style={styles.custom_pressable_light}>{pressable_text_light}</Text>
          </Pressable>

          <Pressable key="window" onPress={() => {
            if (pressable_text_window == window_open) {
              ToastAndroid.show(t('device_detail.window_message_open'), ToastAndroid.SHORT)
              setpressable_text_window(window_close)
            } else {
              ToastAndroid.show(t('device_detail.window_message_close'), ToastAndroid.SHORT)
              setpressable_text_window(window_open)
            }

          }}>
            <Text style={styles.custom_pressable_window}>{pressable_text_window}</Text>
          </Pressable>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{JSON.stringify(name)}</Text>
        <Text style={styles.title}>{JSON.stringify(itemId)}</Text>
        <Button onPress={() => {

          var time = new Date(Date.now());
          setTextvalue(t('device_detail.disturbance_msg_1') + time.toLocaleDateString() + " "+t('device_detail.disturbance_msg_2')+" "+ time.toLocaleTimeString()+" "+ t('device_detail.disturbance_msg_3'));
          setbuttonStoerung(true);

        }} title={t('device_detail.button_title')} disabled={buttonStoerung}></Button>

        <Text style={styles.title}>{textValue}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{
          flexDirection:"row",
          direction:"rtl",
        }}>
          <Pressable key="light" onPress={() => {
            if (pressable_text_light == light_off) {
              ToastAndroid.show(t('device_detail.light_message_off'), ToastAndroid.SHORT)
              setpressable_text_light(light_on)
            } else {
              ToastAndroid.show(t('device_detail.light_message_on'), ToastAndroid.SHORT)
              setpressable_text_light(light_off)
            }

          }} onLongPress={()=>{ToastAndroid.show(t('device_detail.light_long_press'), ToastAndroid.SHORT)}}>
            <Text style={styles.custom_pressable_light}>{pressable_text_light}</Text>
          </Pressable>

          <Pressable key="window" onPress={() => {
            if (pressable_text_window == window_open) {
              ToastAndroid.show(t('device_detail.window_message_open'), ToastAndroid.SHORT)
              setpressable_text_window(window_close)
            } else {
              ToastAndroid.show(t('device_detail.window_message_close'), ToastAndroid.SHORT)
              setpressable_text_window(window_open)
            }

          }}>
            <Text style={styles.custom_pressable_window}>{pressable_text_window}</Text>
          </Pressable>
        </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

  custom_pressable_light: {
    margin:20,
    borderColor: "black",
    borderWidth: 1,
    width: 120,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
    color: "white",
    backgroundColor: Colors.purple,
    flexDirection: "column",
  },
  custom_pressable_window: {
    margin:20,
    width: 120,
    height: 40,
    textAlign: "center",
    textAlignVertical: "center",
    borderRadius: 5,
    color: "white",
    backgroundColor: Colors.green,
    flexDirection: "column",
  },
});
