import i18n from "i18next";
import {initReactI18next}  from "react-i18next"
import german from '../lang/de.json';
import english from '../lang/en.json';
import italian from '../lang/it.json';
//import {getLocales} from 'react-native-localize';
//import * as RNLocalize from "react-native-localize";
import * as Localization from 'expo-localization';
// the translations
const resources = {
  en: {
    translation: english
  },
  de: {
    translation: german
  },
  it: {
    translation: italian
  }
};

console.log(Localization.locale);
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: Localization.locale,
    fallbackLng: 'en',
    keySeparator: ".", 

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;



