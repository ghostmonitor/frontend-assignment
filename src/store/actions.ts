import { Action } from 'redux'
import { Colleague } from './types/colleague.type'

export const CREATE_COLLEAGUE = 'CREATE_COLLEAGUE'
export const REMOVE_COLLEAGUE = 'REMOVE_COLLEAGUE'
export const FAVORITE_COLLEAGUE = 'FAVOURITE_COLLEAGUE'

export interface CreateColleagueAction extends Action {
  type: string
  colleague: Colleague
}

export function createColleague(colleague: Colleague): CreateColleagueAction {
  return {
    type: CREATE_COLLEAGUE,
    colleague
  }
}

export interface RemoveColleagueAction extends Action {
  type: string
  colleagueIndex: number
}

export function removeColleague(colleagueIndex: number): RemoveColleagueAction {
  return {
    type: REMOVE_COLLEAGUE,
    colleagueIndex
  }
}

export interface FavoriteColleagueAction extends Action {
  type: string
  colleagueIndex: number
  favorite: boolean
}

export function favoriteColleague(colleagueIndex: number, favourite: boolean): FavoriteColleagueAction {
  return {
    type: FAVORITE_COLLEAGUE,
    colleagueIndex,
    favorite: favourite
  }
}
