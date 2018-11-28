import { Reducer, combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import eventReducer from './event';
import mockDataReducer from './mockData';
import { EventProps, MockProps } from "../types/Types";

export interface ApplicationState {
  routing: any
  newEvent: EventProps
  mockData: MockProps
}

export const rootReducers: Reducer<ApplicationState> = combineReducers({
  routing: routerReducer,
  newEvent: eventReducer,
  mockData: mockDataReducer
})