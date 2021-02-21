import { defineNuxtPlugin } from '@nuxtjs/composition-api';
import { ja } from 'date-fns/locale';
import {
  format,
  formatDistanceToNowStrict,
  differenceInMinutes,
  getHours,
  getMinutes,
  parse
} from 'date-fns';

type FromNowOptions = {
  addSuffix?: boolean;
  unit?: 'second' | 'minute' | 'hour' | 'day' | 'month' | 'year';
  roundingMethod?: 'floor' | 'ceil' | 'round';
  locale?: globalThis.Locale;
  maxUnit?: 'week';
};
type ParseOptions = {
  locale?: Locale;
  weekStartsOn?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  firstWeekContainsDate?: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  useAdditionalWeekYearTokens?: boolean;
  useAdditionalDayOfYearTokens?: boolean;
};
export interface DateUtils {
  format: (d: Date | number | string | null, f?: string) => string;
  formatISO: (d: Date | number | string | null, f?: string) => string;
  fromNow: (
    d: Date | number | string | null,
    options?: FromNowOptions
  ) => string;
  getHours: (d: Date | number | string | null) => number;
  getMinutes: (d: Date | number | string | null) => number;
  parse: (
    d: string,
    f?: string,
    referenceDate?: Date | number,
    options?: ParseOptions
  ) => Date;
}

export default defineNuxtPlugin((_, inject) => {
  const $date: DateUtils = {
    format: (d, f = 'yyyy/MM/dd') =>
      d ? format(new Date(d), f, { locale: ja }) : '',
    formatISO: (d) => {
      if (!d) return '';
      const date = new Date(d);
      return new Date(
        date.getTime() - date.getTimezoneOffset() * 60 * 1000
      ).toISOString();
    },
    fromNow: (d, options) => {
      if (!d) return '';

      const minutesAgo = differenceInMinutes(new Date(), new Date(d));
      if (minutesAgo < 1) {
        return '0分前';
      }
      const daysAgo = Math.floor(minutesAgo / (24 * 60));
      if (options?.maxUnit === 'week' && daysAgo > 30) {
        return `${Math.floor(daysAgo / 7)}週間前`;
      }

      const optionsWithDefault = {
        addSuffix: true,
        roundingMethod: 'floor',
        locale: ja,
        ...options
      } as const;
      return formatDistanceToNowStrict(new Date(d), optionsWithDefault);
    },
    getHours: (d) => (d ? getHours(new Date(d)) : 0),
    getMinutes: (d) => (d ? getMinutes(new Date(d)) : 0),
    parse: (d, f, referenceDate) => {
      if (!d) {
        throw new ReferenceError('Missing required parameter d');
      }
      if (!f) {
        f = 'yyyy/MM/dd';
      }
      if (!referenceDate) {
        referenceDate = new Date();
      }
      return parse(d, f, referenceDate);
    }
  };
  inject('date', $date);
});
