import dayjs from 'dayjs';

import { IDateHelper } from '@/application/shared/helpers';

import { GenerateDateNowException } from './exceptions';

class DayjsAdapter implements IDateHelper {
  dateNow = (): Date => {
    try {
      const date = dayjs().toDate();
      return date;
    } catch (error) {
      throw new GenerateDateNowException(error);
    }
  };

  iso8601DateNow = (): string => {
    try {
      return dayjs().toISOString();
    } catch (error) {
      throw new GenerateDateNowException(error);
    }
  };
}

const dayjsAdapter = new DayjsAdapter();

export { dayjsAdapter };
