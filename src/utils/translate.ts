import tr from '@/i18n/locales/tr.json';
import en from '@/i18n/locales/en.json';

const translations = {
  tr,
  en,
};

export const t = (key: string, locale: string = 'en  '): string => {
    const keys = key.split('.');
    let value: unknown = translations[locale as keyof typeof translations];
  
    for (const k of keys) {
      if (typeof value !== 'object' || value === null) {
        return key; // Return the key itself if path is invalid
      }
      value = (value as Record<string, unknown>)[k];
    }
  
    return typeof value === 'string' ? value : key; // Ensure return value is a string
  };
  
