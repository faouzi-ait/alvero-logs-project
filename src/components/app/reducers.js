import { LOAD_LOGS_SUCCESS, LOAD_LOGS_FAILURE, SET_LOADING } from './constants';

const initialState = {
  items: [],
  err: {},
  isLoading: false,
};

export const logs = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_LOGS_SUCCESS:
      return {
        ...state,
        items: action.payload,
      };
    case LOAD_LOGS_FAILURE:
      return {
        ...state,
        err: action.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
