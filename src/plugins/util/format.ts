import { defineNuxtPlugin } from '@nuxtjs/composition-api';

export interface Format {
  number: (
    number: string | number | null,
    length?: number,
    padString?: string
  ) => string;

  zipCode: (number: string | null) => string;
}

export default defineNuxtPlugin((_, inject) => {
  const $format: Format = {
    number: (number, length = 7, padString = '0') => {
      if (!number) return '';
      return number.toString().padStart(length, padString);
    },

    zipCode: (number) =>
      number ? number.replace(/^(\d{3})(\d{4})/, '〒$1-$2') : ''
  };

  inject('format', $format);
});
