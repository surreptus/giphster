import { createStore } from 'redux'

import { Action, Gif } from 'support/types'

const ADD = 'gifs/ADD'
const SET = 'gifs/SET'

/**
 * adds the array of gifs to the reducer state at the provided key
 */

export const add = (payload: Gif[]) => ({
  type: ADD,
  payload
})

/**
 * sets the value of 
 */

export const set = (payload: Gif[]) => ({
  type: SET,
  payload
})

/**
 * the reducer adds a key for each query made by the user so that the session
 * can save some data in case they type that query again
 */

const reducer = (state: Gif[] = [], action: Action) => {
  switch (action.type) {
    case ADD:
      return [...state, ...action.payload]

    case SET:
      return action.payload

    default:
      return state
  }
}

const initialState: Gif[] = []

export default createStore(reducer, initialState)
