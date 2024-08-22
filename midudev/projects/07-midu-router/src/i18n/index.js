const i18n = {
  es: {
    about: {
      title: 'Sobre nosotros',
      button: 'Ir a la home',
      description: 'Hola, estoy creando un clon de React-Router'
    }
  },
  en: {
    about: {
      title: 'About us',
      button: 'Go to Home',
      description: 'Hi, I am creating a React-Router clone'
    }
  }
}

export function useI18n(lang) {
  return i18n[lang] || i18n.en
}