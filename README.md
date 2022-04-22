# hoval-challenge-eichmann21
ReactNative App mit Expo und Typescript<br>
Simple App mit Login und Übersichtsseite mit Geräten und für jedes Gerät eine Detailansicht. Nur Demodaten bzw. Demo Zugangsdaten 
<br>Getestet auf Android
<br>Verwendete IDE: Visual Studio Code

<h2>Installation</h2><br>
  <ol>
  <li>Node.js installieren</li>
  <li>Expo installieren (Hilfe für Expo: https://docs.expo.dev/get-started/installation/)</li>
  <li>Auf PC Set-ExecutionPolicy ändern auf RemoteSigned (https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.2)</li>
  <li>Projekt in IDE öffnen und Terminal in IDE starten</li>
  <li>npm install im Terminal ausführen</li>
  <li>expo start ausführen, startet das Projekt wahlweise im Webbrowser, auf Android Smartphone oder IOS. Hilfe für Expo generell: https://docs.expo.dev/get-started/create-a-new-app/ </li>
</ol> 

 <h2>TODOs</h2><br>  
  Sind in den jeweiligen Files als Kommentar hinterlegt<br>
  
 <h2>Update 22.04.2022</h2>
 <ul>
  <li>Mock Daten werden aus JSON File geparst</li> 
  <li>Deutsch, Englisch und Italienisch als Sprache, App erkennt automatisch welche Sprache als Systemsprache hinterlegt ist (i18n Properties)</li>
  <li>Im Dashboard wird zuerst für 2 sek ein Ladesysmbol angezeigt bevor die Mock Daten aufbereitet werden</li>
  </ul><br>
 Für die Neuerung muss man folgende Module installieren:<br>
 npm install react-i18next i18next --save <br>
 expo install expo-localization <br>
 npm install @react-native-picker/picker --save <br>
