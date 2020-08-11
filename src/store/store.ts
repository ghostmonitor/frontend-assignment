import { configureStore, Store } from '@reduxjs/toolkit'
import { colleaguesReducer, ColleaguesState } from './reducers/colleagues.reducer'

export interface AppState {
  colleagues: ColleaguesState
}

export const store: Store<AppState> = configureStore({
  reducer: {
    colleagues: colleaguesReducer,
  }
})
