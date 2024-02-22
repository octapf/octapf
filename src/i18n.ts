import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import esJSON from './locales/es.json';
import enJSON from './locales/en.json';

i18n.use(initReactI18next).init({
	lng: localStorage.getItem('lng') ?? 'en',

	resources: {
		es: {
			translation: esJSON,
		},
		en: {
			translation: enJSON,
		},
	},
	// debug: true,

	interpolation: {
		escapeValue: false,
	},
});

export default i18n;
