import {
    FETCH_PERSONS_REQUEST,
    FETCH_PERSONS_SUCCESS,
    FETCH_PERSONS_FAILURE,
  } from "library/common/actionTypes/personsTypes";
  
  export interface personsState {
    pending: boolean;
    error: string | null;
  }
  
  export interface FetchPersonsSuccessPayload {
  }
  
  export interface FetchPersonsFailurePayload {
    error: string;
  }
  
  export interface FetchPersonsRequest {
    type: typeof FETCH_PERSONS_REQUEST;
    id: string;
  }
  
  export type FetchPersonsSuccess = {
    type: typeof FETCH_PERSONS_SUCCESS;
    payload: FetchPersonsSuccessPayload;
  };
  
  export type FetchPersonsFailure = {
    type: typeof FETCH_PERSONS_FAILURE;
    payload: FetchPersonsFailurePayload;
  };
  
  export type PersonsActions =
    | FetchPersonsRequest
    | FetchPersonsSuccess
    | FetchPersonsFailure;