/**
 * Welcome Screen mit Button zum Login Screen
 */

import { Button, StyleSheet, Alert } from 'react-native';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Willkommen</Text>
      <Button onPress={() => navigation.navigate('Login')}
        title="Zur Login Seite"
        color="#841584"></Button>
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
