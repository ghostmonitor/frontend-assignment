import { Action } from 'redux'
import { Colleague } from './types/colleague.type'

export const CREATE_COLLEAGUE = 'CREATE_COLLEAGUE'
export const REMOVE_COLLEAGUE = 'REMOVE_COLLEAGUE'
export const FAVOURITE_COLLEAGUE = 'FAVOURITE_COLLEAGUE'

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

export interface FavouriteColleagueAction extends Action {
  type: string
  colleagueIndex: number
  favourite: boolean
}

export function favouriteColleague(colleagueIndex: number, favourite: boolean): FavouriteColleagueAction {
  return {
    type: FAVOURITE_COLLEAGUE,
    colleagueIndex,
    favourite
  }
}
