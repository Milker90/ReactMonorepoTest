import axios from 'axios';
import {WorkOutNextBusinessDayResponse} from '../types';

export async function requestWorkOutNextBusinessDay(
  currentDate: string,
  country: string,
  state?: string,
  region?: string,
): Promise<WorkOutNextBusinessDayResponse> {
  const data = {
    currentDate,
    country,
    state,
    region,
  };
  return await axios.post('/api/nextBusinessDay', data);
}
