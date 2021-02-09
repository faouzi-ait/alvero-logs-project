import {
  LOAD_LOGS,
  LOAD_LOGS_SUCCESS,
  LOAD_LOGS_FAILURE,
  SET_LOADING,
} from './constants';

export const loadLogs = () => {
  return { type: LOAD_LOGS };
};

export const loadLogsSuccess = (payload) => {
  return { type: LOAD_LOGS_SUCCESS, payload };
};

export const loadLogsFailure = (payload) => {
  return { type: LOAD_LOGS_FAILURE, payload };
};

export const setLoading = (payload) => {
  return { type: SET_LOADING, payload };
};
