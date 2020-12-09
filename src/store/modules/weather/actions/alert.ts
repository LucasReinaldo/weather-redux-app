import { AlertAction } from '../protocols';
import { ActionTypes } from '../types';

export const setAlertAction = (message: string): AlertAction => {
  return {
    type: ActionTypes.getWeatherAlert,
    payload: message,
  };
};
