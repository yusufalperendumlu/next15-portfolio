import { useRouter } from 'next/router';

export const useLanguage = () => {
  const router = useRouter();
  const { locale, locales, push, pathname, query } = router;

  const changeLanguage = (newLocale: string) => {
    push({ pathname, query }, undefined, { locale: newLocale });
  };

  return {
    currentLocale: locale,
    availableLocales: locales,
    changeLanguage,
  };
}; 