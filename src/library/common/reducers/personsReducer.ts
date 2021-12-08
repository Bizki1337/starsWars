import {
    FETCH_PERSONS_REQUEST,
    FETCH_PERSONS_SUCCESS,
    FETCH_PERSONS_FAILURE,
  } from "library/common/actionTypes/personsTypes";
  
  
  const initialState: any = {
    pending: false,
    persons: [],
    error: null,
  };
  
  const personsReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case FETCH_PERSONS_REQUEST:
        return {
          ...state,
          pending: true,
        };
      case FETCH_PERSONS_SUCCESS:
        return {
          ...state,
          pending: false,
          persons: action.payload.persons,
          error: null,
        };
      case FETCH_PERSONS_FAILURE:
        return {
          ...state,
          pending: false,
          persons: [],
          error: action.payload.error,
        };
      default:
        return {
          ...state,
        };
    }
  };
export default personsReducer;