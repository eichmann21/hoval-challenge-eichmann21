/**
 * Welcome Screen mit Button zum Login Screen
 */


import { Button, StyleSheet, Alert } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import i18n from '../lang/i18n';
import * as Localization from 'expo-localization';





export default function WelcomeScreen({ navigation }: any) {

  const  {t}  = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(Localization.locale);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('welcome.header')}</Text>
      <Button onPress={() => navigation.navigate('Login')}
        title={t('welcome.login_button')}
        color="#841584"></Button>
        <Text style={{marginTop:100, fontWeight: 'bold',  fontSize: 15,}}>{t('welcome.select_language')}</Text>
        <Picker
  style={{ height: 50, width: 150,}}
  selectedValue={selectedLanguage}
  onValueChange={(itemValue) =>{
    i18n.changeLanguage(itemValue)
    setSelectedLanguage(itemValue)

  }
  }>
  <Picker.Item label="English" value="en" />
  <Picker.Item label="Deutsch" value="de-AT" />
  <Picker.Item label="Italiano" value="it" />
</Picker>
    </View>
  );
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
});
