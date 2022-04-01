/**
 * Screen für Detailseite, ist Störung vorhanden wird zusätzlich der Button für Störung quittiert angezeigt
 * TODO: Uhrzeit anzeigen wann Störung aufgetreten ist
 */

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Alert, Button, Platform, Pressable, StyleSheet, ToastAndroid } from 'react-native';
import { initialWindowMetrics } from 'react-native-safe-area-context';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';

export default function ModalScreen({ route }: any) {
  const { name, itemId, warning } = route.params;
  const [textValue, setTextvalue] = useState('');
  const [buttonStoerung, setbuttonStoerung] = useState(false);

  const [pressable_text_light, setpressable_text_light] = useState('Licht ausschalten');
  const [pressable_text_window, setpressable_text_window] = useState('Fenster öffnen');

  if (JSON.stringify(warning) == '"keine Störung"') {
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
            if (pressable_text_light == "Licht ausschalten") {
              ToastAndroid.show("Licht wird ausgeschaltet", ToastAndroid.SHORT)
              setpressable_text_light("Licht einschalten")
            } else {
              ToastAndroid.show("Licht wird eingeschaltet", ToastAndroid.SHORT)
              setpressable_text_light("Licht ausschalten")
            }

          }} onLongPress={()=>{ToastAndroid.show("Licht steuern", ToastAndroid.SHORT)}}>
            <Text style={styles.custom_pressable_light}>{pressable_text_light}</Text>
          </Pressable>

          <Pressable key="window" onPress={() => {
            if (pressable_text_window == "Fenster öffnen") {
              ToastAndroid.show("Fenster wird geöffnet", ToastAndroid.SHORT)
              setpressable_text_window("Fenster schließen")
            } else {
              ToastAndroid.show("Fenster wird geschlossen", ToastAndroid.SHORT)
              setpressable_text_window("Fenster öffnen")
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
          setTextvalue("Störung wurde am:" + time.toDateString() + " um " + time.toTimeString() + "quittiert!");
          setbuttonStoerung(true);

        }} title="Störung Quittieren" disabled={buttonStoerung}></Button>

        <Text style={styles.title}>{textValue}</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        <View style={{
          flexDirection:"row",
          direction:"rtl",
        }}>
          <Pressable key="light" onPress={() => {
            if (pressable_text_light == "Licht ausschalten") {
              ToastAndroid.show("Licht wird ausgeschaltet", ToastAndroid.SHORT)
              setpressable_text_light("Licht einschalten")
            } else {
              ToastAndroid.show("Licht wird eingeschaltet", ToastAndroid.SHORT)
              setpressable_text_light("Licht ausschalten")
            }

          }} onLongPress={()=>{ToastAndroid.show("Licht steuern", ToastAndroid.SHORT)}}>
            <Text style={styles.custom_pressable_light}>{pressable_text_light}</Text>
          </Pressable>

          <Pressable key="window" onPress={() => {
            if (pressable_text_window == "Fenster öffnen") {
              ToastAndroid.show("Fenster wird geöffnet", ToastAndroid.SHORT)
              setpressable_text_window("Fenster schließen")
            } else {
              ToastAndroid.show("Fenster wird geschlossen", ToastAndroid.SHORT)
              setpressable_text_window("Fenster öffnen")
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
