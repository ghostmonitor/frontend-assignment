import { createReducer } from '@reduxjs/toolkit'

import {
  CREATE_COLLEAGUE,
  CreateColleagueAction,
  RemoveColleagueAction,
  REMOVE_COLLEAGUE,
  FAVORITE_COLLEAGUE,
  FavoriteColleagueAction
} from '../actions'
import { Colleague } from '../types/colleague.type'
export type ColleaguesState = Colleague[]

const initialState: ColleaguesState = [
  {
    name: 'Tori Broughton',
    favorite: false
  },
  {
    name: 'Marcie Tyson',
    favorite: false
  },
  {
    name: 'Zaydan Navarro',
    favorite: false
  },
  {
    name: 'Carmen Ahmed',
    favorite: false
  },
  {
    name: 'Leanna Bowman',
    favorite: false
  }
]

export const colleaguesReducer = createReducer(initialState, {
  [CREATE_COLLEAGUE]: (state: ColleaguesState, action: CreateColleagueAction) => {
    state.push(action.colleague)
  },
  [REMOVE_COLLEAGUE]: (state: ColleaguesState, action: RemoveColleagueAction) => {
    state.splice(action.colleagueIndex, 1)
  },
  [FAVORITE_COLLEAGUE]: (state: ColleaguesState, action: FavoriteColleagueAction) => {
    state[action.colleagueIndex].favorite = action.favorite
  }
})
