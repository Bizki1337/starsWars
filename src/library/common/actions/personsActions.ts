import {
    FETCH_PERSONS_REQUEST,
    FETCH_PERSONS_FAILURE,
    FETCH_PERSONS_SUCCESS,
  } from "library/common/actionTypes/personsTypes";
  import {
    FetchPersonsRequest,
    FetchPersonsSuccess,
    FetchPersonsFailure,
    FetchPersonsFailurePayload,
  } from "library/common/types/personsTypes";
  
  export const fetchPersonsRequest = (id: string): FetchPersonsRequest => ({
    type: FETCH_PERSONS_REQUEST,
    id,
  });
  
  export const fetchPersonsSuccess = (
    payload: any
  ): FetchPersonsSuccess => ({
    type: FETCH_PERSONS_SUCCESS,
    payload,
  });
  
  export const fetchPersonsFailure = (
    payload: FetchPersonsFailurePayload
  ): FetchPersonsFailure => ({
    type: FETCH_PERSONS_FAILURE,
    payload,
  });