/**
 * Login Screen, aktuell wird die Eingabe mit Zugangsdaten die im Code hinterlegt sind verglichen
 * TODO: Wenn App geschlossen wird angemeldet bleiben
 */

import { StyleSheet, TextInput } from 'react-native';
import { Button } from 'react-native';
import { Text, View } from '../components/Themed';
import Colors from '../constants/Colors';
import React, { useState, useEffect } from 'react';
import { CommonActions } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';




export default function LoginScreen({ navigation }: any) {

  const [isEmail, setEmail] = useState('');
  const [isPwd, setPwd] = useState('');
  const  {t}  = useTranslation();

  return (
    <View style={(styles.container)}>
      <Text style={styles.title}>{t('login.header')}</Text>
      <TextInput
        style={styles.input}
        placeholder={t('login.placeholder_email')}
        onChangeText={newEmail => setEmail(newEmail)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder={t('login.placeholder_pwd')}
        secureTextEntry={true}
        onChangeText={newPwd => setPwd(newPwd)}
      />

      <Button
      onPress={()=>{
        let data = {
          "email": isEmail,
          "pwd": isPwd
        }
    
        if(data.email=="test@test.com"&&data.pwd=="123"){
         /*navigation.navigate("Dashboard",{
              email:data.email
            })*/

            navigation.dispatch(
              CommonActions.reset({
                index:1,
                routes:[
                  {name:"Dashboard",
                  
                params:{email:data.email}}
                ]
              })
            )
        }else{
          alert(t('login.error_login'))
        }
      }}
        title={t('login.do_login_button')}
        color="red"
        accessibilityLabel="" ></Button>
    </View>
  );



    /**fetch("", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
      });*/

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
    marginVertical: 40,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 20,
    textAlign: "center",
    width:300,
    

  },
});


